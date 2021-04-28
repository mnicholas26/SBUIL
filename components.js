window.onload = () => {

    function createStylesheet(){
        let style = document.createElement('style');
        document.head.children[0].before(style);
        let stylesheet = style.sheet;

        //general
        stylesheet.insertRule(
            `SBUIC.hidden, SBUIC .hidden{
                display: none;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `SBUIC.row, SBUIC .row{
                flex-direction: row;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `SBUIC.column, SBUIC .column{
                flex-direction: column;
            }`, stylesheet.cssRules.length
        );

        //slider
        stylesheet.insertRule(
            `.SBUISlider{
                display: flex;
                justify-content: space-around;
                align-items: center;
                /*DEFAULT VALUES*/
                height: 100px;
                width: 300px;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider > .trolley{
                position: relative;
                /*DEFAULT VALUES*/
                height: 20%;
                width: 80%;
                background-color: grey;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider > .trolley > .range{
                height: 100%;
                /*DEFAULT VALUES*/
                background-color: deepskyblue;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider > .trolley > .nodule{
                position: absolute;
                display: flex;
                justify-content: center;
                /*DEFAULT VALUES*/
                height: 40px;
                width: 40px;
                background-color: deepskyblue;
                border-radius: 50%;
                top: calc(50% - 20px);
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider > .trolley > .nodule > .label{
                position: absolute;
                /*DEFAULT VALUES*/
                height: 40px;
                font-size: 30px;
                color: deepskyblue;
                top: -35px;
                user-select: none;
            }`, stylesheet.cssRules.length
        );

    }
    createStylesheet();

    function createElementSB(type, options){
        let elem = document.createElement('div');
        elem.classList.add('SBUIC');

        elem.disabled = false;
        elem.controller = undefined;
        elem.eventObj = {};

        elem.listeners = [];
        elem.spareindexes = [];

        elem.changed = () => {
            for(const listener of elem.listeners){
                listener.func(elem.eventObj);
            }
        }

        elem.addListener = (fn) => {
            let index = (elem.spareindexes.length == 0) ? elem.listeners.length : elem.spareindexes.pop();
            elem.listeners.push({index: index, func:fn});
            return index;
        }

        elem.removeListener = (index) => {
            let temp = [];
            for(const listener of elem.listeners){
                if(listener.index != index) temp.push(listener);
            }
            elem.listeners = temp;
            elem.spareindexes.push(index);
        }

        switch (type) {
            case "slider":
                createSlider(elem, options);
                elem.classList.add('SBUISlider');
                break;
            case "dualslider":
                break;
            case "checkbox":
                break;
            case "radio":
                break;
            case "colourpicker":
                break;
            default:
                break;
        }


        return elem;
    }

    function createSlider(elem, options){
        //check if options exists
        if(options == undefined) options = {}; 

        //create dom
        let trolley = document.createElement('div');
        trolley.classList.add('trolley');
        let range = document.createElement('div');
        range.classList.add('range');
        let nodule = document.createElement('div');
        nodule.classList.add('nodule');
        let label = document.createElement('div');
        label.classList.add('label');

        trolley.appendChild(range);
        nodule.appendChild(label);
        trolley.appendChild(nodule);
        elem.appendChild(trolley);

        //define properties with getters and setters
        Object.defineProperty(elem, 'round', {
            get: () => {
                return this._round;
            },
            set: (val) => {
                if(typeof val != 'number') console.error('Slider Round value must be a number');
                else this._round = val;
            }
        });

        Object.defineProperty(elem, 'min', {
            get: () => {
                return this._min;
            },
            set: (val) => {
                if(typeof val != 'number') console.error('Slider Min value must be a number');
                else this._min = val;
            }
        });

        Object.defineProperty(elem, 'max', {
            get: () => {
                return this._max;
            },
            set: (val) => {
                if(typeof val != 'number') console.error('Slider Max value must be a number');
                else this._max = val;
            }
        });

        Object.defineProperty(elem, 'notches', {
            get: () => {
                return this._notches;
            },
            set: (val) => {
                if(typeof val != 'number') console.error('Slider Notches value must be a number');
                else this._notches = val;
            }
        });

        Object.defineProperty(elem, 'direction', {
            get: () => {
                return this._direction;
            },
            set: (val) => {
                if(typeof val != 'string') console.error('Slider Direction value must be a string');
                else if(!(val == 'row' || val == 'column')) console.error('Slider Direction value must be either row or column');
                else {
                    this._direction = val;
                    elem.classList.remove('row', 'column');
                    elem.classList.add(val);
                }
            }
        });

        Object.defineProperty(elem, 'vmap', {
            get: () => {
                return this._vmap;
            },
            set: (val) => {
                if(typeof val != 'function') console.error('Slider Vmap value must be a function');
                else {
                    this._vmap = val;
                }
            }
        });

        elem.notch = (per) => {
            if(elem.notches > 2){
                let n = 100 / (elem.notches - 1);
                return n * Math.round(per / n);
            }
            return per;
        }

        Object.defineProperty(elem, 'percent', {
            get: () => {
                return this._percent;
            },
            set: (val) => {
                if(typeof val != 'number') console.error('Slider Percent value must be a number');
                // else if(val < elem.min) console.error('Slider Percent cannot be below min (' + elem.min + ')');
                // else if(val > elem.max) console.error('Slider Percent cannot be above max (' + elem.max + ')');
                else {
                    //functionality
                    let percent = val;
                    percent = elem.notch(percent);
                    this._percent = percent;

                    //styling
                    range.style.width = percent + '%';
                    nodule.style.left = `calc(${percent}% - ${nodule.offset/2}px)`;
                    elem.value = elem.vmap(elem.percent);
                    label.textContent = ((elem.value * (elem.max - elem.min))/100).toFixed(elem.round);
                }
            }
        });

        //set properties
        elem.round = (options.round) ? options.round : 0;
        elem.min = (options.min) ? options.min : 0;
        elem.max = (options.max) ? options.max : 10;
        elem.notches = (options.notches) ? options.notches : 0;
        elem.direction = (options.direction) ? options.direction : 'row';
        elem.vmap = (options.vmap) ? options.vmap : (val) => {return val};
        elem.percent = (options.percent) ? options.percent : 50;

        //define methods
        elem.setup = () => {
            let noduleBBox = nodule.getBoundingClientRect();
            nodule.offset = (elem.direction == 'row') ? noduleBBox.width/2 : noduleBBox.height/2;
            elem.percent = elem.percent;
        }

        

        //define user events and functionality
        elem.addEventListener('mousedown', (e) => {
            elem.trolleyBBox = trolley.getBoundingClientRect();
            if(elem.direction == 'row'){
                let percent = (e.clientX - elem.trolleyBBox.x)/elem.trolleyBBox.width;
                percent = Math.max(Math.min(percent, 1), 0) * 100;
                elem.percent = percent;
            } else {
                //
            }
        });

    }

    let testslider = createElementSB('slider');
    document.body.appendChild(testslider);
    testslider.setup();
    

    function setupSlider(slider)
    {
        let trolley = slider.firstElementChild;
        let icon = trolley.firstElementChild;
        //this dictates notches if you want discrete, input example [0, 25, 50, 75, 100]
        slider.notches = [];
        //slider.notches = [0, 25, 50, 75, 100];
        slider.x = trolley.getBoundingClientRect().x;
        slider.width = trolley.getBoundingClientRect().width;
        slider.percent = 0;
        slider.pressed = false;
        slider.round = true;
        slider.changebuffer = 0.5;

        icon.offsetx = icon.getBoundingClientRect().width/2;
        icon.style.left = -icon.offsetx + "px";
        icon.offsety = icon.getBoundingClientRect().height/2;
        icon.style.top = "calc(50% - " + icon.offsety + "px)";
        
        slider.addEventListener('mousedown', (e) => {
            slider.pressed = true;
            slider.x = trolley.getBoundingClientRect().x;
            slider.changepercent(100*(e.clientX - slider.x)/slider.width);
        });
        window.addEventListener('mousemove', (e) => {
            if(slider.pressed) slider.changepercent(100*(e.clientX - slider.x)/slider.width);
        });

        slider.changepercent = function(percent)
        {
            percent = notch(percent);
            if(slider.round) percent = Math.round(percent);
            if(percent < 0) percent = 0;
            if(percent > 100) percent = 100;
            if(Math.abs(slider.percent - percent) > slider.changebuffer)
            {
                icon.style.left = "calc(" + percent + "% - " + icon.offsetx + "px)";
                slider.percent = percent;
                slider.changed();
            }
        }

        window.addEventListener('mouseup', () => {
            slider.pressed = false;
        });
        document.body.addEventListener('mouseleave', () => {
            slider.pressed = false;
        });

        function notch(per){
            let offset = 100;
            let notch = per;
            for(let i = 0; i < slider.notches.length; i++)
            {
                let attempt = Math.abs(per-slider.notches[i]);
                if(attempt < offset) 
                {
                    notch = slider.notches[i];
                    offset = attempt;
                }
            }
            return notch;
        }

        //array of functions
        slider.events = [];
        slider.spareindexes = [];

        slider.changed = function (){
            slider.events.forEach(fn => fn.func(slider.percent));
        }

        slider.addevent = function(fn){
            let index = (slider.spareindexes.length == 0) ? slider.events.length : slider.spareindexes.pop();
            slider.events.push({index: index, func:fn});
            return index;
        }

        slider.removeevent = function (index){
            let temp = [];
            for(let i = 0; i < slider.events.length; i++)
            {
                if(slider.events[i].index != index) temp.push(slider.events[i]);
            }
            slider.events = temp;
        }


    }
}