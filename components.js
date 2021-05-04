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

        // stylesheet.insertRule(
        //     `SBUIC.row, SBUIC .row{
        //         flex-direction: row;
        //     }`, stylesheet.cssRules.length
        // );

        // stylesheet.insertRule(
        //     `SBUIC.column, SBUIC .column{
        //         flex-direction: column;
        //     }`, stylesheet.cssRules.length
        // );

        //slider
        stylesheet.insertRule(
            `.SBUISlider{
                display: flex;
                justify-content: space-around;
                align-items: center;
                cursor: pointer;
                /*DEFAULT VALUES*/
                height: 100px;
                width: 300px;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider.column{
                /*DEFAULT VALUES*/
                height: 300px;
                width: 100px;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider > .trolley{
                position: relative;
                display: flex;
                /*DEFAULT VALUES*/
                height: 20%;
                width: 80%;
                background-color: grey;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider.column > .trolley{
                flex-direction: column-reverse;
                /*DEFAULT VALUES*/
                height: 80%;
                width: 20%;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider.reverse > .trolley{
                flex-direction: row-reverse;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider.column.reverse > .trolley{
                flex-direction: column;
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
            `.SBUISlider.column > .trolley > .nodule{
                /*DEFAULT VALUES*/
                top: initial;
                left: calc(50% - 20px);
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider > .trolley > .nodule > .label{
                position: absolute;
                /*DEFAULT VALUES*/
                height: 40px;
                font-size: 25px;
                color: deepskyblue;
                top: -30px;
                user-select: none;
                font-family: arial, sans-serif;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider.column > .trolley > .nodule > .label{
                /*DEFAULT VALUES*/
                top: initial;
                left: 45px;
            }`, stylesheet.cssRules.length
        );

        //checkbox
        stylesheet.insertRule(
            `.SBUICheckbox{
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                /*DEFAULT VALUES*/
                height: 60px;
                width: 60px;
                border: deepskyblue 1px solid;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUICheckbox > .content{
                display: none;
                user-select: none;
                /*DEFAULT VALUES*/
                height: 80%;
                width: 80%;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUICheckbox > .content > .text{
                text-anchor: middle;
                dominant-baseline: central;
                /*DEFAULT VALUES*/
                fill: deepskyblue;
                font-size: 26px;
                font-family: arial, sans-serif;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUICheckbox:hover > .content{
                display: block;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUICheckbox:hover > .content > .text{
                /*DEFAULT VALUES*/
                fill: rgba(0, 191, 255, 0.65);
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUICheckbox.checked > .content{
                display: block;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUICheckbox.checked:hover > .content > .text{
                /*DEFAULT VALUES*/
                fill: deepskyblue;
            }`, stylesheet.cssRules.length
        );

        //radio buttons
        stylesheet.insertRule(
            `.SBUIRadioButtons{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                padding: 5px;
                /* DEFAULT VALUES */
                width: 300px;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUIRadioButtons > .radio{
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border-radius: 50%;
                position: relative;
                user-select: none;
                /* DEFUALT VALUES */
                height: 60px;
                width: 60px;
                border: 1px solid deepskyblue;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUIRadioButtons > .radio > .content{
                border-radius: 50%;
                display: none;
                /* DEFUALT VALUES */
                height: calc(50% + 1px);
                width: calc(50% + 1px);
                background-color: deepskyblue;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUIRadioButtons > .radio.selected > .content{
                display: block;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUIRadioButtons > .radio:hover > .content{
                display: block;
                /* DEFAULT VALUES */
                background-color: rgba(0, 191, 255, 0.65);
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUIRadioButtons > .radio.selected:hover > .content{
                /* DEFAULT VALUES */
                background-color: deepskyblue;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUIRadioButtons > .radio > .label{
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                cursor: default;
                /* DEFAULT VALUES */
                top: 120%;
                font-family: sans-serif;
                font-size: 14px;
                color: deepskyblue;
                max-width: 50px;
            }`, stylesheet.cssRules.length
        );

    }
    createStylesheet();

    function createElementSB(type, options){
        let elem = document.createElement('div');
        elem.classList.add('SBUIC');

        elem.disabled = false;
        elem.controller = undefined;
        elem.eventObj = {source: elem};

        elem.listeners = [];
        elem.spareindexes = [];

        elem.changed = () => {
            elem.eventObj.type = "change";
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
                createCheckbox(elem, options);
                elem.classList.add('SBUICheckbox');
                break;
            case "radio":
                createRadioButtons(elem, options);
                elem.classList.add('SBUIRadioButtons');
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
                return elem._round;
            },
            set: (val) => {
                if(typeof val != 'number') console.error('Slider Round value must be a number');
                else elem._round = val;
            }
        });

        Object.defineProperty(elem, 'min', {
            get: () => {
                return elem._min;
            },
            set: (val) => {
                if(typeof val != 'number') console.error('Slider Min value must be a number');
                else elem._min = val;
            }
        });

        Object.defineProperty(elem, 'max', {
            get: () => {
                return elem._max;
            },
            set: (val) => {
                if(typeof val != 'number') console.error('Slider Max value must be a number');
                else elem._max = val;
            }
        });

        Object.defineProperty(elem, 'notches', {
            get: () => {
                return elem._notches;
            },
            set: (val) => {
                if(typeof val != 'number') console.error('Slider Notches value must be a number');
                else elem._notches = val;
            }
        });

        Object.defineProperty(elem, 'direction', {
            get: () => {
                return elem._direction;
            },
            set: (val) => {
                if(typeof val != 'string') console.error('Slider Direction value must be a string');
                else{
                    let [dir, rev] = val.split('-');
                    if(!(dir == 'row' || dir == 'column') || (rev != undefined && rev != 'reverse')){
                        console.error('Slider Direction must be either: row, column, row-reverse or column-reverse');
                    } else {
                        elem._direction = dir;
                        elem.classList.remove('row', 'column', 'reverse');
                        elem.classList.add(dir);
                        if(rev) elem.classList.add(rev);
                        elem.reversed = (rev) ? true : false;
                    }
                }
            }
        });

        //define methods
        elem.setup = () => {
            let noduleBBox = nodule.getBoundingClientRect();
            nodule.offset = (elem.direction == 'row') ? noduleBBox.width/2 : noduleBBox.height/2;
            elem.render();
        }

        elem.render = () => {
            let percent = elem.value * 100;
            if(elem.direction == 'row'){
                range.style.width = percent + '%';
                if(elem.reversed) nodule.style.right = `calc(${percent}% - ${nodule.offset}px)`;
                else nodule.style.left = `calc(${percent}% - ${nodule.offset}px)`;
            } else {
                range.style.height = percent + '%';
                if(elem.reversed) nodule.style.top = `calc(${percent}% - ${nodule.offset}px)`;
                else nodule.style.bottom = `calc(${percent}% - ${nodule.offset}px)`;
            }
            label.textContent = elem.displayValue;
        }

        elem.notch = (val) => {
            if(elem.notches > 0){
                let n = 100 / elem.notches;
                return (n * Math.round((val * 100) / n))/ 100;
            }
            return val;
        }

        Object.defineProperty(elem, 'value', {
            get: () => {
                return elem._value;
            },
            set: (val) => {
                if(typeof val != 'number') console.error('Slider Value must be a number');
                else {
                    let value = Math.max(Math.min(val, 1), 0);
                    value = elem.notch(value);
                    if(elem._value != value){
                        elem._value = value;
                        elem.displayValue = (elem.value * (elem.max - elem.min)).toFixed(elem.round);
                        elem.eventObj = {
                            ...elem.eventObj,
                            value: value,
                            dvalue: elem.displayValue
                        }
                        elem.render();
                        elem.changed();
                    }
                }
            }
        });

        //set properties
        elem.round = (options.round) ? options.round : 0;
        elem.min = (options.min) ? options.min : 0;
        elem.max = (options.max) ? options.max : 100;
        elem.notches = (options.notches) ? options.notches : 0;
        elem.direction = (options.direction) ? options.direction : 'row';
        elem.value = (options.value) ? options.value : 0.5;

        //define user events and functionality
        elem.addEventListener('mousedown', (e) => {
            e.preventDefault();
            elem.trolleyBBox = trolley.getBoundingClientRect();
            let valuefn;
            if(elem.direction == 'row'){
                if(elem.reversed){
                    valuefn = (e) => (elem.trolleyBBox.x + elem.trolleyBBox.width - e.clientX)/elem.trolleyBBox.width;
                } else {
                    valuefn = (e) => (e.clientX - elem.trolleyBBox.x)/elem.trolleyBBox.width;
                }
            } else {
                if(elem.reversed){
                    valuefn = (e) => (e.clientY - elem.trolleyBBox.y)/elem.trolleyBBox.height;
                } else {
                    valuefn = (e) => (elem.trolleyBBox.y + elem.trolleyBBox.height - e.clientY)/elem.trolleyBBox.height;
                }
            }
            elem.value = valuefn(e);
            elem.addEventListener('mousemove', drag);
            window.addEventListener('mouseup', enddrag);
            window.addEventListener('mouseleave', enddrag);

            function drag(e){
                elem.value = valuefn(e);
            }

            function enddrag(){
                elem.removeEventListener('mousemove', drag);
                window.removeEventListener('mouseup', enddrag);
                window.removeEventListener('mouseleave', enddrag);

            }
        });

    }

    function createCheckbox(elem, options){
        //check if options exists
        if(options == undefined) options = {}; 

        //create dom
        let svgNS = "http://www.w3.org/2000/svg";
        let content = document.createElementNS(svgNS, 'svg');
        content.classList.add('content');
        content.setAttribute('viewBox', '0 0 30 30');
        let text = document.createElementNS(svgNS, 'text');
        text.classList.add('text');
        text.setAttribute('x', '50%');
        text.setAttribute('y', '50%');
        content.appendChild(text);
        elem.appendChild(content);

        //define properties with getters and setters
        Object.defineProperty(elem, 'content', {
            get: () => {
                return elem._content;
            },
            set: (val) => {
                if(!(typeof val == 'string' || typeof val == 'number')) console.error('Checkbox Content value must be a string or number');
                else {
                    elem._content = val;
                    text.textContent = val;
                }
            }
        });

        Object.defineProperty(elem, 'value', {
            get: () => {
                return elem._value;
            },
            set: (val) => {
                if(typeof val != 'boolean') console.error('Checkbox Value must be a boolean');
                else {
                    if(elem._value != val){
                        if(val) elem.classList.add('checked');
                        else elem.classList.remove('checked');
                        elem._value = val;
                        elem.eventObj = {
                            ...elem.eventObj,
                            value: val,
                            displayValue: elem.content
                        }
                        elem.changed();
                    }
                }
            }
        });

        //define methods
        elem.toggle = () => {
            elem.value = !elem.value;
        }

        //set properties
        elem.content = (options.content) ? options.content : '✔';
        elem.value = (options.value) ? options.value : false;

        //define user events and functionality
        elem.addEventListener('mousedown', () => {
            elem.toggle();
        });
    }

    function createRadioButtons(elem, options){
        //OPTIONS REQUIRED
        if(options == undefined || options.n == undefined) console.error('This element requires an options object with n (amount of buttons) specified');
        else if(typeof options.n != 'number') console.error('n (amount of buttons) must be a number');
        else if(options.n < 1) console.error('n (amount of buttons) must be at least 1');
        else {
            //create dom
            let buttons = [];
            for(let i = 0; i < options.n; i++){
                let button = document.createElement('div');
                button.i = i;
                button.classList.add('radio');
                button.select = () => {
                    button.classList.add('selected');
                }
                button.addEventListener('mousedown', () => {
                    elem.select(button.i);
                })
                buttons.push(button);
                
                let content = document.createElement('div');
                content.classList.add('content');
                button.appendChild(content);
                
                let label = document.createElement('div');
                label.classList.add('label');
                button.label = label;
                
                button.appendChild(label);
                elem.appendChild(button);
            }

            //define properties with getters and setters
            Object.defineProperty(elem, 'labels', {
                get: () => {
                    return elem._labels;
                },
                set: (val) => {
                    if(!(val instanceof Array)) console.error('Radio Buttons Labels value must be an array');
                    else if(val.length == 0) return;
                    else if(val.length != buttons.length) console.error('Radio Buttons Labels value must equal n (amount of buttons)');
                    else {
                        elem._labels = val;
                        for(let [i, button] of buttons.entries()){
                            button.label.textContent = val[i];
                        }
                    }
                }
            });

            Object.defineProperty(elem, 'value', {
                get: () => {
                    return elem._value;
                },
                set: (val) => {
                    if(typeof val != 'number') console.error('Radio Button Value must be a number');
                    else {
                        if((val < 0 || val > buttons.length) && elem._value != -1){
                            buttons[elem._value].classList.remove('selected');
                            elem._value = -1;
                            elem.eventObj = {
                                ...elem.eventObj,
                                value: val,
                                displayValue: undefined
                            }
                            elem.changed();
                        } else if(elem._value != val){
                            if(elem._value != -1) buttons[elem._value].classList.remove('selected');
                            elem._value = val;
                            let button = buttons[elem._value];
                            button.select();
                            elem.eventObj = {
                                ...elem.eventObj,
                                value: val,
                                displayValue: button.label.textContent
                            }
                            elem.changed();
                        }
                    }
                }
            });

            //define methods
            elem.select = (n) => {
                elem.value = n;
            }

            //set properties
            elem.labels = (options.labels) ? options.labels : [];
            elem._value = -1;
            if(options.value != undefined) elem.value = options.value;
        }
    }

    function printEventObj(e){
        console.log(e)
    }


    let testslider = createElementSB('slider');
    document.body.appendChild(testslider);
    testslider.setup();
    testslider.addListener(printEventObj);

    let testcheckbox = createElementSB('checkbox');
    document.body.appendChild(testcheckbox);
    testcheckbox.addListener(printEventObj);
    // testcheckbox.content = '🅱';

    let testradio = createElementSB('radio', {n: 4, labels: ['poo', 'big poo', 'OMEGA big poo', '🔥'], value: 0});
    document.body.appendChild(testradio);
    testradio.addListener(printEventObj);
}