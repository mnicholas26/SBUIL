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
                width: 100%;
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
                display: flex;
                justify-content: center;
                align-items: center;
                /*DEFAULT VALUES*/
                height: 40px;
                font-size: 25px;
                color: deepskyblue;
                top: -35px;
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

        //dual slider
        stylesheet.insertRule(
            `.SBUISlider.dual > .trolley > .range{
                position: absolute;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider.dual > .trolley > .nodule > .label[min]{
                /*DEFAULT VALUES*/
                top: initial;
                bottom: -35px;
            }`, stylesheet.cssRules.length
        );

        stylesheet.insertRule(
            `.SBUISlider.dual.column > .trolley > .nodule > .label[min]{
                /*DEFAULT VALUES*/
                bottom: initial;
                left: initial;
                right: 45px;
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

        elem.listeners = [];
        elem.spareindexes = [];
        elem.environment = {
            user: false
        }

        elem.fireEvent = (event, options) => {
            let ev = {
                source: elem,
                type: event
            };
            for(const option of Object.keys(options)){
                ev[option] = options[option];
            }
            for(const env of Object.keys(elem.environment)){
                ev[env] = elem.environment[env];
            }
            listenerloop: 
            for(const listener of elem.listeners){
                if(event != listener.type) continue;
                for(const option of Object.keys(listener.options)){
                    if(ev[option] != listener.options[option]) continue listenerloop;
                }
                listener.func(ev);
            }
        }

        elem.addListener = (event, fn, options = {}) => {
            let index = (elem.spareindexes.length == 0) ? elem.listeners.length : elem.spareindexes.pop();
            elem.listeners.push({index: index, type: event, func:fn, options: options});
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
                createDualSlider(elem, options);
                elem.classList.add('SBUISlider', 'dual');
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
                    if(elem._value != value || elem.environment.final){
                        elem._value = value;
                        elem.displayValue = (elem.value * (elem.max - elem.min)).toFixed(elem.round);
                        elem.render();
                        elem.fireEvent('change', {value: value, dvalue: elem.displayValue});
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

        //set local environment
        elem.environment = {
            ...elem.environment,
            final: false,
        }

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

            elem.environment.final = false;
            elem.environment.user = true;
            elem.value = valuefn(e);
            elem.addEventListener('mousemove', drag);
            window.addEventListener('mouseup', enddrag);
            window.addEventListener('mouseleave', enddrag);

            function drag(e){
                elem.value = valuefn(e);
            }

            function enddrag(e){
                elem.environment.final = true;
                elem.value = valuefn(e);
                elem.environment.user = false;
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
                        elem.fireEvent('change', {value: val, dvalue: elem.content});
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

        //set local environment
        elem.environment = {
            ...elem.environment
        }

        //define user events and functionality
        elem.addEventListener('mousedown', () => {
            elem.environment.user = true;
            elem.toggle();
            elem.environment.user = false;
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
                    elem.environment.user = true;
                    elem.select(button.i);
                    elem.environment.user = false;
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
                            elem.fireEvent('change', {value: val, dvalue: undefined});
                        } else if(elem._value != val){
                            if(elem._value != -1) buttons[elem._value].classList.remove('selected');
                            elem._value = val;
                            let button = buttons[elem._value];
                            button.select();
                            elem.fireEvent('change', {value: val, dvalue: button.label.textContent});
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

            //set local environment
            elem.environment = {
                ...elem.environment
            }
        }
    }

    function createDualSlider(elem, options){
        //check if options exists
        if(options == undefined) options = {}; 

        //create dom
        let trolley = document.createElement('div');
        trolley.classList.add('trolley');
        let range = document.createElement('div');
        range.classList.add('range');
        let noduleL = document.createElement('div');
        noduleL.classList.add('nodule');
        noduleL.setAttribute('min', '');
        let noduleR = document.createElement('div');
        noduleR.classList.add('nodule');
        noduleR.setAttribute('max', '');
        let labelL = document.createElement('div');
        labelL.classList.add('label');
        labelL.setAttribute('min', '');
        let labelR = document.createElement('div');
        labelR.classList.add('label');
        labelR.setAttribute('max', '');

        trolley.appendChild(range);
        noduleL.appendChild(labelL);
        noduleR.appendChild(labelR);
        trolley.appendChild(noduleL);
        trolley.appendChild(noduleR);
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

        Object.defineProperty(elem, 'nearest', {
            get: () => {
                return elem._nearest;
            },
            set: (val) => {
                if(typeof val != 'boolean') console.error('Slider Nearest value must be a boolean');
                else{
                    elem._nearest = val;
                }
            }
        });

        //define methods
        elem.setup = () => {
            let noduleBBoxL = noduleL.getBoundingClientRect();
            noduleL.offset = (elem.direction == 'row') ? noduleBBoxL.width/2 : noduleBBoxL.height/2;
            let noduleBBoxR = noduleR.getBoundingClientRect();
            noduleR.offset = (elem.direction == 'row') ? noduleBBoxR.width/2 : noduleBBoxR.height/2;
            elem.render();
        }

        elem.render = () => {
            let minp = elem.value.min * 100;
            let maxp = elem.value.max * 100;
            let diff = maxp - minp;
            if(elem.direction == 'row'){
                range.style.width = diff + '%';
                if(elem.reversed){
                    noduleL.style.right = `calc(${minp}% - ${noduleL.offset}px)`;
                    noduleR.style.right = `calc(${maxp}% - ${noduleR.offset}px)`;
                    range.style.right = minp + '%';
                } else {
                    noduleL.style.left = `calc(${minp}% - ${noduleL.offset}px)`;
                    noduleR.style.left = `calc(${maxp}% - ${noduleR.offset}px)`;
                    range.style.left = minp + '%';
                }
            } else {
                range.style.height = diff + '%';
                if(elem.reversed){
                    noduleL.style.top = `calc(${minp}% - ${noduleL.offset}px)`;
                    noduleR.style.top = `calc(${maxp}% - ${noduleR.offset}px)`;
                    range.style.top = minp + '%';
                } else {
                    noduleL.style.bottom = `calc(${minp}% - ${noduleL.offset}px)`;
                    noduleR.style.bottom = `calc(${maxp}% - ${noduleR.offset}px)`;
                    range.style.bottom = minp + '%';
                }
            }
            labelL.textContent = elem.displayValue.min;
            labelR.textContent = elem.displayValue.max;
        }

        elem.notch = (val) => {
            if(elem.notches > 0){
                let n = 100 / elem.notches;
                return (n * Math.round((val * 100) / n))/ 100;
            }
            return val;
        }

        // Object.defineProperty(elem, 'vmin', {
        //     get: () => {
        //         return elem._vmin;
        //     },
        //     set: (val) => {
        //         if(typeof val != 'number') console.error('Dual Slider Minimum Value must be a number');
        //         else {
        //             val = Math.max(Math.min(val, 1), 0);
        //             val = elem.notch(val);
        //             if(val > elem._value.max) elem._value.max = val;
        //             if(elem._vmin != val || elem.environment.final){
        //                 elem._vmin = val;
        //                 elem.displayValue.min = (elem.value.min * (elem.max - elem.min)).toFixed(elem.round);
        //                 elem.render();
        //                 elem.fireEvent('change', {value: elem._value, dvalue: elem.displayValue});
        //             }
        //         }
        //     }
        // });

        Object.defineProperty(elem, 'value', {
            get: () => {
                return elem._value;
            },
            set: (val) => {
                if(val.min == undefined || val.max == undefined) console.error('Dual Slider Value must be an object with a min and max property');
                if(typeof val.min != 'number' || typeof val.max != 'number') console.error('Dual Slider Values (min/max) must be numbers');
                else {
                    let minv = Math.max(Math.min(val.min, 1), 0);
                    let maxv = Math.max(Math.min(val.max, 1), 0);
                    minv = elem.notch(minv);
                    maxv = elem.notch(maxv);
                    if(minv > elem._value.max) maxv = minv;
                    else if(maxv < elem._value.min) minv = maxv;
                    if(elem._value.min != minv || elem._value.max != maxv || elem.environment.final){
                        elem._value = {min: minv, max: maxv};
                        elem.displayValue = {
                            min: (elem.value.min * (elem.max - elem.min)).toFixed(elem.round),
                            max: (elem.value.max * (elem.max - elem.min)).toFixed(elem.round)
                        }
                        elem.render();
                        elem.fireEvent('change', {value: elem._value, dvalue: elem.displayValue});
                    }
                }
            }
        });

        //set properties
        elem.round = (options.round) ? options.round : 0;
        elem.min = (options.min) ? options.min : 0;
        elem.max = (options.max) ? options.max : 1000;
        elem.notches = (options.notches) ? options.notches : 20;
        elem.direction = (options.direction) ? options.direction : 'row';
        elem._value = {min: undefined, max: undefined};
        elem.value = (options.value) ? options.value : {min: 0.25, max: 0.75};
        elem.nearest = (options.nearest) ? options.nearest : true;

        //set local environment
        elem.environment = {
            ...elem.environment,
            final: false,
        }

        //define user events and functionality
        // noduleL.addEventListener('mousedown', noduleDrag);
        // noduleR.addEventListener('mousedown', noduleDrag);
        elem.addEventListener('mousedown', e => {
            if(!elem.nearest && e.target != noduleL && e.target != noduleR) return;
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
            let val = valuefn(e);
            let left;
            if(elem.nearest) left = (Math.abs(val - elem.value.min) < Math.abs(val - elem.value.max)) ? true : false;
            else left = e.target == noduleL ? true : false;

            elem.environment.user = true;
            elem.environment.final = false;
            elem.value = left ? {min: val, max: elem.value.max} : {min: elem.value.min, max: val};
            elem.addEventListener('mousemove', drag);
            window.addEventListener('mouseup', enddrag);
            window.addEventListener('mouseleave', enddrag);

            function drag(e){
                elem.value = left ? {min: valuefn(e), max: elem.value.max} : {min: elem.value.min, max: valuefn(e)};
            }

            function enddrag(e){
                elem.environment.final = true;
                elem.value = left ? {min: valuefn(e), max: elem.value.max} : {min: elem.value.min, max: valuefn(e)};
                elem.environment.user = false;
                elem.removeEventListener('mousemove', drag);
                window.removeEventListener('mouseup', enddrag);
                window.removeEventListener('mouseleave', enddrag);

            }
        });

    }

    // function createColourPicker(elem, options){
    //     //check if options exists
    //     if(options == undefined) options = {}; 

    //     //create dom
    //     let trolley = document.createElement('div');
    //     trolley.classList.add('trolley');
    //     let range = document.createElement('div');
    //     range.classList.add('range');
    //     let nodule = document.createElement('div');
    //     nodule.classList.add('nodule');
    //     let label = document.createElement('div');
    //     label.classList.add('label');

    //     trolley.appendChild(range);
    //     nodule.appendChild(label);
    //     trolley.appendChild(nodule);
    //     elem.appendChild(trolley);

    //     //define properties with getters and setters
    //     Object.defineProperty(elem, 'round', {
    //         get: () => {
    //             return elem._round;
    //         },
    //         set: (val) => {
    //             if(typeof val != 'number') console.error('Slider Round value must be a number');
    //             else elem._round = val;
    //         }
    //     });

    //     Object.defineProperty(elem, 'min', {
    //         get: () => {
    //             return elem._min;
    //         },
    //         set: (val) => {
    //             if(typeof val != 'number') console.error('Slider Min value must be a number');
    //             else elem._min = val;
    //         }
    //     });

    //     Object.defineProperty(elem, 'max', {
    //         get: () => {
    //             return elem._max;
    //         },
    //         set: (val) => {
    //             if(typeof val != 'number') console.error('Slider Max value must be a number');
    //             else elem._max = val;
    //         }
    //     });

    //     Object.defineProperty(elem, 'notches', {
    //         get: () => {
    //             return elem._notches;
    //         },
    //         set: (val) => {
    //             if(typeof val != 'number') console.error('Slider Notches value must be a number');
    //             else elem._notches = val;
    //         }
    //     });

    //     Object.defineProperty(elem, 'direction', {
    //         get: () => {
    //             return elem._direction;
    //         },
    //         set: (val) => {
    //             if(typeof val != 'string') console.error('Slider Direction value must be a string');
    //             else{
    //                 let [dir, rev] = val.split('-');
    //                 if(!(dir == 'row' || dir == 'column') || (rev != undefined && rev != 'reverse')){
    //                     console.error('Slider Direction must be either: row, column, row-reverse or column-reverse');
    //                 } else {
    //                     elem._direction = dir;
    //                     elem.classList.remove('row', 'column', 'reverse');
    //                     elem.classList.add(dir);
    //                     if(rev) elem.classList.add(rev);
    //                     elem.reversed = (rev) ? true : false;
    //                 }
    //             }
    //         }
    //     });

    //     //define methods
        

    //     Object.defineProperty(elem, 'value', {
    //         get: () => {
    //             return elem._value;
    //         },
    //         set: (val) => {
    //             if(typeof val != 'number') console.error('Slider Value must be a number');
    //             else {
    //                 let value = Math.max(Math.min(val, 1), 0);
    //                 value = elem.notch(value);
    //                 if(elem._value != value || elem.environment.final){
    //                     elem._value = value;
    //                     elem.displayValue = (elem.value * (elem.max - elem.min)).toFixed(elem.round);
    //                     elem.render();
    //                     elem.fireEvent('change', {value: value, dvalue: elem.displayValue});
    //                 }
    //             }
    //         }
    //     });

    //     //set properties
    //     elem.round = (options.round) ? options.round : 0;
    //     elem.min = (options.min) ? options.min : 0;
    //     elem.max = (options.max) ? options.max : 100;
    //     elem.notches = (options.notches) ? options.notches : 0;
    //     elem.direction = (options.direction) ? options.direction : 'row';
    //     elem.value = (options.value) ? options.value : 0.5;

    //     //set local environment
    //     elem.environment = {
    //         ...elem.environment,
    //         final: false,
    //     }

    //     //define user events and functionality
    //     elem.addEventListener('mousedown', (e) => {
    //         e.preventDefault();
    //         elem.trolleyBBox = trolley.getBoundingClientRect();
    //         let valuefn;
    //         if(elem.direction == 'row'){
    //             if(elem.reversed){
    //                 valuefn = (e) => (elem.trolleyBBox.x + elem.trolleyBBox.width - e.clientX)/elem.trolleyBBox.width;
    //             } else {
    //                 valuefn = (e) => (e.clientX - elem.trolleyBBox.x)/elem.trolleyBBox.width;
    //             }
    //         } else {
    //             if(elem.reversed){
    //                 valuefn = (e) => (e.clientY - elem.trolleyBBox.y)/elem.trolleyBBox.height;
    //             } else {
    //                 valuefn = (e) => (elem.trolleyBBox.y + elem.trolleyBBox.height - e.clientY)/elem.trolleyBBox.height;
    //             }
    //         }

    //         elem.environment.final = false;
    //         elem.environment.user = true;
    //         elem.value = valuefn(e);
    //         elem.addEventListener('mousemove', drag);
    //         window.addEventListener('mouseup', enddrag);
    //         window.addEventListener('mouseleave', enddrag);

    //         function drag(e){
    //             elem.value = valuefn(e);
    //         }

    //         function enddrag(e){
    //             elem.environment.final = true;
    //             elem.value = valuefn(e);
    //             elem.environment.user = false;
    //             elem.removeEventListener('mousemove', drag);
    //             window.removeEventListener('mouseup', enddrag);
    //             window.removeEventListener('mouseleave', enddrag);

    //         }
    //     });

    // }

    class SBColour{
        _r = 0;
        _g = 0;
        _b = 0;
        _a = 1;
        _h = 0;
        _s = 0;
        _l = 0;
        _type = 'rgb';
        _alpha = false;
        _hex = '#000000';
        _css = 'black';

        lazy = false;
        changed = false;

        constructor(type = 'rgb', ...args){
            if(validator({name: 'type', req: true, type: 'string'}, {type: type}, 'Colour.val')){
                if(type == 'rgb' || type == 'hsl' || type == 'hex' || type == 'css'){
                    if(type == 'rgb'){
                        let [r, g, b, a] = args;
                        this.RGB(r, g, b, a);
                    } else if(type == 'hsl'){
                        let [h, s, l, a] = args;
                        this.HSL(h, s, l, a);
                    } else if(type == 'hex'){
                        this.hex = args[0];
                    } else if(type == 'css'){
                        this.css = args[0];
                    }
                    this._type = type;
                    this.update();
                } else console.error(`Value Error. Type must be either 'rgb', 'hsl', 'hex' or 'css'. provided value: ${type}`);
            }
        }

        update(type = 'rgb'){
            switch (type) {
                case 'rgb':
                    this.#HSL(this.#RGBtoHSL(this.rgb));
                    this._hex = this.#RGBtoHEX(this.rgb);
                    this._css = this.#RGBtoCSS(this.rgb);
                    break;
                case 'hsl':
                    this.#RGB(this.#HSLtoRGB(this.hsl));
                    this._hex = this.#RGBtoHEX(this.rgb);
                    this._css = this.#RGBtoCSS(this.rgb);
                    break;
                case 'hex':
                    this.#RGB(this.#HEXtoRGB(this.hex));
                    this.#HSL(this.#RGBtoHSL(this.rgb));
                    this._css = this.#RGBtoCSS(this.rgb);
                    break;
                case 'css':
                    this.#RGB(this.#CSStoRGB(this.css));
                    this._hex = this.#RGBtoHEX(this.rgb);
                    this.#HSL(this.#RGBtoHSL(this.rgb));
                    break;
                default:
                    break;
            }
        }

        val(type = this._type){
            if(!validator({name: 'type', req: true, type: 'string'}, {type: type}, 'Colour.val')) type = this._type;
            let str = '';
            let alpha = (this._a < 1) ? true : false;
            switch (type) {
                case 'rgb':
                    str += 'rgb';
                    if(alpha) str += 'a';
                    str += `(${Math.round(this._r)}, ${Math.round(this._g)}, ${Math.round(this._b)}`;
                    if(alpha) str += `, ${this._a}`;
                    str += ')'; 
                    break;
                case 'hsl':
                    str += 'hsl';
                    if(alpha) str += 'a';
                    str += `(${Math.round(this._h)}, ${Math.round(this._s)}, ${Math.round(this._l)}`;
                    if(alpha) str += `, ${this._a}`;
                    str += ')'; 
                    break;
                case 'hex':
                    str += `#${this._hex}`;
                    if(alpha) str += this._a.toString(16);
                    break;
                default:
                    break;
            }
            return str;
        }

        get rgb(){
            return {r: this._r, g: this._g, b: this._b, a: this._a};
        }

        set rgb(rgb){
            if(validator(this.#RGBblueprint, rgb, 'Colour.rgb')){
                this._r = rgb.r;
                this._g = rgb.g;
                this._b = rgb.b;
                this._a = (rgb.a != undefined) ? rgb.a : this._a;
                this.update();
            }
        }

        RGB(r, g, b, a){
            let input = {r: r, g: g, b: b, a: a};
            if(validator(this.#RGBblueprint, input, 'Colour.RGB')){
                this.#RGB(input);
                this.update();
            }
        }

        #RGB(obj){
            this._r = obj.r;
            this._g = obj.g;
            this._b = obj.b;
            this._a = (obj.a != undefined) ? obj.a : this._a;
        }

        get hsl(){
            return {h: this._h, s: this._s, l: this._l, a: this._a};
        }

        set hsl(hsl){
            if(validator(this.#HSLblueprint, hsl, 'Colour.hsl')){
                this._h = hsl.h;
                this._s = hsl.s;
                this._l = hsl.l;
                this._a = (hsl.a != undefined) ? hsl.a : this._a;
                this.update();
            }
        }

        HSL(h, s, l, a){
            let input = {h: h, s: s, l: l, a: a};
            if(validator(this.#HSLblueprint, input, 'Colour.HSL')){
                this.#HSL(input);
                this.update('hsl');
            }
        }

        #HSL(obj){
            this._h = obj.h;
            this._s = obj.s;
            this._l = obj.l;
            this._a = (obj.a != undefined) ? obj.a : this._a;
        }

        get r(){
            return this._r;
        }
        set r(val){
            if(validator({name: 'r', req: true, type: 'number', min: 0, max: 255}, {r: val}, 'Colour.r')){
                this._r = val;
                this.update();
            }
        }

        get b(){
            return this._b;
        }
        set b(val){
            if(validator({name: 'b', req: true, type: 'number', min: 0, max: 255}, {b: val}, 'Colour.b')){
                this._b = val;
                this.update();
            }
        }

        get g(){
            return this._g;
        }
        set g(val){
            if(validator({name: 'g', req: true, type: 'number', min: 0, max: 255}, {g: val}, 'Colour.g')){
                this._g = val;
                this.update();
            }
        }

        get h(){
            return this._h;
        }
        set h(val){
            if(validator({name: 'h', req: true, type: 'number', min: 0, max: 360}, {h: val}, 'Colour.h')){
                this._h = val;
                this.update('hsl');
            }
        }

        get s(){
            return this._s;
        }
        set s(val){
            if(validator({name: 's', req: true, type: 'number', min: 0, max: 100}, {s: val}, 'Colour.s')){
                this._s = val;
                this.update('hsl');
            }
        }

        get l(){
            return this._l;
        }
        set l(val){
            if(validator({name: 'l', req: true, type: 'number', min: 0, max: 100}, {l: val}, 'Colour.l')){
                this._l = val;
                this.update('hsl');
            }
        }

        get a(){
            return this._a;
        }
        set a(val){
            if(validator({name: 'a', req: true, type: 'number', min: 0, max: 1}, {a: val}, 'Colour.a')){
                this._a = val;
                this.update();
            }
        }

        get hex(){
            return this._hex;
        }
        set hex(val){
            if(validator(this.#HEXblueprint, {hex: val}, 'Colour.hex')){
                let h = val.slice(val.indexOf('#') + 1);
                
                if(h.length == 1) h = h.repeat(6);
                else if(h.length == 2) h = h.repeat(3);
                else if(h.length == 3) h = h.repeat(2);
                else if(!(h.length == 6 || h.length == 8))
                    console.error(`Value Error. Hex Code: '${h}' has length: '${h.length}' but should be either 1, 2, 3, 6 or 8 digits long`);
                h = h.toLowerCase();
                
                let reg = /\w{2}/g || [];
                let [r, g, b, a] = h.match(reg);
                
                if(a != undefined) this._a = parseInt(a, 16)/255;
                this._hex = r + g + b;
                this.update('hex');
            }
        }

        get css(){
            return this._css;
        }
        set css(name){
            if(validator({name: 'name', req: true, type: 'string'}, {name: name}, 'Colour.css')){
                let newname = this.#cssTable.find(o => o.name == name.toLowerCase()).name.toLowerCase();
                if(newname != undefined){
                    this._css = newname;
                    this.update('css');
                }
            }
        }

        get type(){
            return this._type;
        }
        set type(str){
            if(validator({name: 'type', req: true, type: 'string'}, {type: str}, 'Colour.type')){
                if(str == 'rgb' || str == 'hsl' || str == 'hex') this._type = str;
                else console.error(`Value Error. Type must be either 'rgb', 'hsl' or 'hex'. provided value: ${str}`);
            }
        }

        #RGBtoHSL(obj){
            let {r, g, b, a} = obj;
            let rr = r/255;
            let gg = g/255;
            let bb = b/255;
            let cmax = Math.max(rr, gg, bb);
            let cmin = Math.min(rr, gg, bb);
            let delta = cmax - cmin;

            let h, s, l;
            if(delta == 0) h = 0;
            else if(cmax == rr) h = 60 * ((((gg - bb) / delta) + 6) % 6);
            else if(cmax == gg) h = 60 * (((bb - rr) / delta) + 2);
            else if(cmax == bb) h = 60 * (((rr - gg) / delta) + 4);

            l = (cmax + cmin) / 2;

            if(delta == 0) s = 0;
            else s = delta / (1 - Math.abs((2 * l) - 1));

            let out = {
                h: h,
                s: s * 100,
                l: l * 100,
                a: a
            }

            return out;
        }

        #RGBtoHEX(obj){
            let {r, g, b, a} = obj;
            return Math.round(r).toString(16) + Math.round(g).toString(16) + Math.round(b).toString(16);
        }

        #RGBtoCSS(obj){
            let {r, g, b, a} = obj;
            let out = this.#cssTable.find(o => (o.rgb.r == r && o.rgb.g == g && o.rgb.b == b));
            if(out != undefined) out = out.name;
            else out = "";
            return out;
        }

        #HSLtoRGB(obj){
            let {h, s, l, a} = obj;
            let r, g, b;
            s /= 100;
            l /= 100;
            
            let c = (1 - Math.abs((2 * l) - 1)) * s;
            let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
            let m = l - (c/2);

            if(h < 60) [r, g, b] = [c, x, 0];
            else if(h < 120) [r, g, b] = [x, c, 0];
            else if(h < 180) [r, g, b] = [0, c, x];
            else if(h < 240) [r, g, b] = [0, x, c];
            else if(h < 300) [r, g, b] = [x, 0, c];
            else (h < 360) [r, g, b] = [c, 0, x];

            r = (r + m) * 255;
            g = (g + m) * 255;
            b = (b + m) * 255;

            let out = {
                r: r,
                g: g,
                b: b,
                a: a
            }

            return out;
        }

        #HEXtoRGB(hex){
            let [r, g, b, a] = hex.match(/\w{2}/g);
            if(a != undefined) a = parseInt(a, 16);
            return {r: parseInt(r, 16), g: parseInt(g, 16), b: parseInt(b, 16), a: a};
        }

        #CSStoRGB(name){
            let out = this.#cssTable.find(o => o.name == name.toLowerCase());
            if(out != undefined) out = out.rgb;
            return out;
        }

        static RGBtoHSL(...args){
            let rgb, opts = {};

            if(args.length > 1 && typeof args[args.length - 1] == 'object' && args[args.length - 1] != null) opts = args.pop();
            let options = {
                round: (opts.round) ? true : false
            }

            if(args.length == 1 && typeof args[0] == 'object' && args[0] != null){
                if(validator(SBColour.RGBblueprint, args[0], 'RGBtoHSL')) rgb = args[0];
                else return;
            } else if(args.length == 3 || args.length == 4) {
                let [r, g, b, a] = args;
                let input  = {r: r, g: g, b: b, a: a};
                if(validator(SBColour.RGBblueprint, input, 'RGBtoHSL')) rgb = input;
                else return;
            } else {
                console.error(`Argument Error: Please pass either an object with RGB properties or r, g, b and possibly a values`);
                return;
            }

            let hsl = this.#RGBtoHSL(rgb)
            if(options.round) {
                hsl.h = Math.round(hsl.h);
                hsl.s = Math.round(hsl.s);
                hsl.l = Math.round(hsl.l);
            }
            return hsl;
        }

        static HSLtoRGB(...args){
            let hsl, opts = {};

            if(args.length > 1 && typeof args[args.length - 1] == 'object' && args[args.length - 1] != null) opts = args.pop();
            let options = {
                round: (opts.round) ? true : false
            }

            if(args.length == 1 && typeof args[0] == 'object' && args[0] != null){
                if(validator(SBColour.HSLblueprint, args[0], 'HSLtoRGB')) hsl = args[0];
                else return;
            } else if(args.length == 3 || args.length == 4) {
                let [h, s, l, a] = args;
                let input = {h: h, s: s, l: l, a: a};
                if(validator(SBColour.HSLblueprint, input, 'HSLtoRGB')) hsl = input;
                else return;
            } else {
                console.error(`Argument Error: Please pass either an object with HSL properties or h, s, l and possibly a values`);
                return;
            }

            let rgb = this.#HSLtoRGB(hsl)
            if(options.round) {
                rgb.r = Math.round(rgb.r);
                rgb.g = Math.round(rgb.g);
                rgb.b = Math.round(rgb.b);
            }
            return rgb;
        }

        static RGBtoHEX(...args){
            let rgb;

            if(args.length == 1 && typeof args[0] == 'object' && args[0] != null){
                if(validator(SBColour.RGBblueprint, args[0], 'RGBtoHEX')) rgb = args[0];
                else return;
            } else if(args.length == 3 || args.length == 4) {
                let [r, g, b, a] = args;
                let input  = {r: r, g: g, b: b, a: a};
                if(validator(SBColour.RGBblueprint, input, 'RGBtoHEX')) rgb = input;
                else return;
            } else {
                console.error(`Argument Error: Please pass either an object with RGB properties or r, g, b and possibly a values`);
                return;
            }

            return '#' + this.#RGBtoHEX(rgb)
        }

        static HEXtoRGB(hex, opacity){
            let hexreg = /#[abcdef\d]*/i;
            let blueprint = [
                {name: 'hex', req: true, type: 'string', reg: hexreg},
                {name: 'opacity', req: false, type: 'number', min: 0, max: 1}
            ];
            if(validator(blueprint, {hex: hex, opacity: opacity}, 'HEXtoRGB')){
                hex = hex.slice(hex.indexOf('#') + 1);
                if(hex.length == 1) hex = hex.repeat(6);
                else if(hex.length == 2) hex = hex.repeat(3);
                else if(hex.length == 3) hex = hex.repeat(2);
                else if(!(hex.length == 6 || hex.length == 8))
                    console.error(`Value Error. Hex Code: '${hex}' has length: '${hex.length}' but should be either 1, 2, 3, 6 or 8 digits long`);
                hex = hex.toLowerCase();
                
                let out = this.#HEXtoRGB(hex);
                if(opacity != undefined) out.a = opacity;
                return out;
            }
        }

        static RGBtoCSS(...args){
            let rgb;

            if(args.length == 1 && typeof args[0] == 'object' && args[0] != null){
                if(validator(SBColour.RGBblueprint, args[0], 'RGBtoHEX')) rgb = args[0];
                else return;
            } else if(args.length == 3 || args.length == 4) {
                let [r, g, b, a] = args;
                let input  = {r: r, g: g, b: b, a: a};
                if(validator(SBColour.RGBblueprint, input, 'RGBtoCSS')) rgb = input;
                else return;
            } else {
                console.error(`Argument Error: Please pass either an object with RGB properties or r, g, b values`);
                return;
            }
            
            return this.#RGBtoCSS(rgb);
        }

        static CSStoRGB(name, opacity){
            let blueprint = [
                {name: 'opacity', req: false, type: 'number', min: 0, max: 1},
                {name: 'name', req: true, type: 'string'}
            ];
            if(validator(blueprint, {opacity: opacity, name: name}, 'CSStoRGB')){
                let rgb = this.#CSStoRGB(name);
                if(rgb != undefined) rgb.a = (opacity != undefined) ? opacity : 1;
                return rgb;
            }
        }

        //may turn these functions into direct functions at a later date
        static HSLtoHEX(...args){
            //
        }

        static HSLtoCSS(...args){
            //
        }

        static CSStoHEX(name, opacity){
            //
        }

        static CSStoHSL(name, opacity){
            //
        }

        static HEXtoHSL(hex, opacity){
            //
        }

        static HEXtoCSS(hex, opacity){
            //
        }

        #RGBblueprint = [
            {
                name: 'r',
                req: true,
                type: 'number',
                min: 0,
                max: 255
            },
            {
                name: 'g',
                req: true,
                type: 'number',
                min: 0,
                max: 255
            },
            {
                name: 'b',
                req: true,
                type: 'number',
                min: 0,
                max: 255
            },
            {
                name: 'a',
                req: false,
                type: 'number',
                min: 0,
                max: 1
            },
        ];

        #HSLblueprint = [
            {
                name: 'h',
                req: true,
                type: 'number',
                min: 0,
                max: 360
            },
            {
                name: 's',
                req: true,
                type: 'number',
                min: 0,
                max: 100
            },
            {
                name: 'l',
                req: true,
                type: 'number',
                min: 0,
                max: 100
            },
            {
                name: 'a',
                req: false,
                type: 'number',
                min: 0,
                max: 1
            },
        ];

        #HEXblueprint = [
            {
                name: 'hex',
                req: true,
                type: 'string',
                reg: /#[abcdef\d]*/i
            }
        ];

        #cssTable = [
            {
                "name": "black",
                "hex": "000000",
                "rgb": {
                    "r":  0,
                    "g":  0,
                    "b":  0
                }
            },
            {
                "name": "silver",
                "hex": "C0C0C0",
                "rgb": {
                    "r":  192,
                    "g":  192,
                    "b":  192
                }
            },
            {
                "name": "gray",
                "hex": "808080",
                "rgb": {
                    "r":  128,
                    "g":  128,
                    "b":  128
                }
            },
            {
                "name": "white",
                "hex": "FFFFFF",
                "rgb": {
                    "r":  255,
                    "g":  255,
                    "b":  255
                }
            },
            {
                "name": "maroon",
                "hex": "800000",
                "rgb": {
                    "r":  128,
                    "g":  0,
                    "b":  0
                }
            },
            {
                "name": "red",
                "hex": "FF0000",
                "rgb": {
                    "r":  255,
                    "g":  0,
                    "b":  0
                }
            },
            {
                "name": "purple",
                "hex": "800080",
                "rgb": {
                    "r":  128,
                    "g":  0,
                    "b":  128
                }
            },
            {
                "name": "fuchsia",
                "hex": "FF00FF",
                "rgb": {
                    "r":  255,
                    "g":  0,
                    "b":  255
                }
            },
            {
                "name": "green",
                "hex": "008000",
                "rgb": {
                    "r":  0,
                    "g":  128,
                    "b":  0
                }
            },
            {
                "name": "lime",
                "hex": "00FF00",
                "rgb": {
                    "r":  0,
                    "g":  255,
                    "b":  0
                }
            },
            {
                "name": "olive",
                "hex": "808000",
                "rgb": {
                    "r":  128,
                    "g":  128,
                    "b":  0
                }
            },
            {
                "name": "yellow",
                "hex": "FFFF00",
                "rgb": {
                    "r":  255,
                    "g":  255,
                    "b":  0
                }
            },
            {
                "name": "navy",
                "hex": "000080",
                "rgb": {
                    "r":  0,
                    "g":  0,
                    "b":  128
                }
            },
            {
                "name": "blue",
                "hex": "0000FF",
                "rgb": {
                    "r":  0,
                    "g":  0,
                    "b":  255
                }
            },
            {
                "name": "teal",
                "hex": "008080",
                "rgb": {
                    "r":  0,
                    "g":  128,
                    "b":  128
                }
            },
            {
                "name": "aqua",
                "hex": "00FFFF",
                "rgb": {
                    "r":  0,
                    "g":  255,
                    "b":  255
                }
            },
            {
                "name": "aliceblue",
                "hex": "f0f8ff",
                "rgb": {
                    "r":  240,
                    "g":  248,
                    "b":  255
                }
            },
            {
                "name": "antiquewhite",
                "hex": "faebd7",
                "rgb": {
                    "r":  250,
                    "g":  235,
                    "b":  215
                }
            },
            {
                "name": "aqua",
                "hex": "00ffff",
                "rgb": {
                    "r":  0,
                    "g":  255,
                    "b":  255
                }
            },
            {
                "name": "aquamarine",
                "hex": "7fffd4",
                "rgb": {
                    "r":  127,
                    "g":  255,
                    "b":  212
                }
            },
            {
                "name": "azure",
                "hex": "f0ffff",
                "rgb": {
                    "r":  240,
                    "g":  255,
                    "b":  255
                }
            },
            {
                "name": "beige",
                "hex": "f5f5dc",
                "rgb": {
                    "r":  245,
                    "g":  245,
                    "b":  220
                }
            },
            {
                "name": "bisque",
                "hex": "ffe4c4",
                "rgb": {
                    "r":  255,
                    "g":  228,
                    "b":  196
                }
            },
            {
                "name": "black",
                "hex": "000000",
                "rgb": {
                    "r":  0,
                    "g":  0,
                    "b":  0
                }
            },
            {
                "name": "blanchedalmond",
                "hex": "ffebcd",
                "rgb": {
                    "r":  255,
                    "g":  235,
                    "b":  205
                }
            },
            {
                "name": "blue",
                "hex": "0000ff",
                "rgb": {
                    "r":  0,
                    "g":  0,
                    "b":  255
                }
            },
            {
                "name": "blueviolet",
                "hex": "8a2be2",
                "rgb": {
                    "r":  138,
                    "g":  43,
                    "b":  226
                }
            },
            {
                "name": "brown",
                "hex": "a52a2a",
                "rgb": {
                    "r":  165,
                    "g":  42,
                    "b":  42
                }
            },
            {
                "name": "burlywood",
                "hex": "deb887",
                "rgb": {
                    "r":  222,
                    "g":  184,
                    "b":  135
                }
            },
            {
                "name": "cadetblue",
                "hex": "5f9ea0",
                "rgb": {
                    "r":  95,
                    "g":  158,
                    "b":  160
                }
            },
            {
                "name": "chartreuse",
                "hex": "7fff00",
                "rgb": {
                    "r":  127,
                    "g":  255,
                    "b":  0
                }
            },
            {
                "name": "chocolate",
                "hex": "d2691e",
                "rgb": {
                    "r":  210,
                    "g":  105,
                    "b":  30
                }
            },
            {
                "name": "coral",
                "hex": "ff7f50",
                "rgb": {
                    "r":  255,
                    "g":  127,
                    "b":  80
                }
            },
            {
                "name": "cornflowerblue",
                "hex": "6495ed",
                "rgb": {
                    "r":  100,
                    "g":  149,
                    "b":  237
                }
            },
            {
                "name": "cornsilk",
                "hex": "fff8dc",
                "rgb": {
                    "r":  255,
                    "g":  248,
                    "b":  220
                }
            },
            {
                "name": "crimson",
                "hex": "dc143c",
                "rgb": {
                    "r":  220,
                    "g":  20,
                    "b":  60
                }
            },
            {
                "name": "cyan",
                "hex": "00ffff",
                "rgb": {
                    "r":  0,
                    "g":  255,
                    "b":  255
                }
            },
            {
                "name": "darkblue",
                "hex": "00008b",
                "rgb": {
                    "r":  0,
                    "g":  0,
                    "b":  139
                }
            },
            {
                "name": "darkcyan",
                "hex": "008b8b",
                "rgb": {
                    "r":  0,
                    "g":  139,
                    "b":  139
                }
            },
            {
                "name": "darkgoldenrod",
                "hex": "b8860b",
                "rgb": {
                    "r":  184,
                    "g":  134,
                    "b":  11
                }
            },
            {
                "name": "darkgray",
                "hex": "a9a9a9",
                "rgb": {
                    "r":  169,
                    "g":  169,
                    "b":  169
                }
            },
            {
                "name": "darkgreen",
                "hex": "006400",
                "rgb": {
                    "r":  0,
                    "g":  100,
                    "b":  0
                }
            },
            {
                "name": "darkgrey",
                "hex": "a9a9a9",
                "rgb": {
                    "r":  169,
                    "g":  169,
                    "b":  169
                }
            },
            {
                "name": "darkkhaki",
                "hex": "bdb76b",
                "rgb": {
                    "r":  189,
                    "g":  183,
                    "b":  107
                }
            },
            {
                "name": "darkmagenta",
                "hex": "8b008b",
                "rgb": {
                    "r":  139,
                    "g":  0,
                    "b":  139
                }
            },
            {
                "name": "darkolivegreen",
                "hex": "556b2f",
                "rgb": {
                    "r":  85,
                    "g":  107,
                    "b":  47
                }
            },
            {
                "name": "darkorange",
                "hex": "ff8c00",
                "rgb": {
                    "r":  255,
                    "g":  140,
                    "b":  0
                }
            },
            {
                "name": "darkorchid",
                "hex": "9932cc",
                "rgb": {
                    "r":  153,
                    "g":  50,
                    "b":  204
                }
            },
            {
                "name": "darkred",
                "hex": "8b0000",
                "rgb": {
                    "r":  139,
                    "g":  0,
                    "b":  0
                }
            },
            {
                "name": "darksalmon",
                "hex": "e9967a",
                "rgb": {
                    "r":  233,
                    "g":  150,
                    "b":  122
                }
            },
            {
                "name": "darkseagreen",
                "hex": "8fbc8f",
                "rgb": {
                    "r":  143,
                    "g":  188,
                    "b":  143
                }
            },
            {
                "name": "darkslateblue",
                "hex": "483d8b",
                "rgb": {
                    "r":  72,
                    "g":  61,
                    "b":  139
                }
            },
            {
                "name": "darkslategray",
                "hex": "2f4f4f",
                "rgb": {
                    "r":  47,
                    "g":  79,
                    "b":  79
                }
            },
            {
                "name": "darkslategrey",
                "hex": "2f4f4f",
                "rgb": {
                    "r":  47,
                    "g":  79,
                    "b":  79
                }
            },
            {
                "name": "darkturquoise",
                "hex": "00ced1",
                "rgb": {
                    "r":  0,
                    "g":  206,
                    "b":  209
                }
            },
            {
                "name": "darkviolet",
                "hex": "9400d3",
                "rgb": {
                    "r":  148,
                    "g":  0,
                    "b":  211
                }
            },
            {
                "name": "deeppink",
                "hex": "ff1493",
                "rgb": {
                    "r":  255,
                    "g":  20,
                    "b":  147
                }
            },
            {
                "name": "deepskyblue",
                "hex": "00bfff",
                "rgb": {
                    "r":  0,
                    "g":  191,
                    "b":  255
                }
            },
            {
                "name": "dimgray",
                "hex": "696969",
                "rgb": {
                    "r":  105,
                    "g":  105,
                    "b":  105
                }
            },
            {
                "name": "dimgrey",
                "hex": "696969",
                "rgb": {
                    "r":  105,
                    "g":  105,
                    "b":  105
                }
            },
            {
                "name": "dodgerblue",
                "hex": "1e90ff",
                "rgb": {
                    "r":  30,
                    "g":  144,
                    "b":  255
                }
            },
            {
                "name": "firebrick",
                "hex": "b22222",
                "rgb": {
                    "r":  178,
                    "g":  34,
                    "b":  34
                }
            },
            {
                "name": "floralwhite",
                "hex": "fffaf0",
                "rgb": {
                    "r":  255,
                    "g":  250,
                    "b":  240
                }
            },
            {
                "name": "forestgreen",
                "hex": "228b22",
                "rgb": {
                    "r":  34,
                    "g":  139,
                    "b":  34
                }
            },
            {
                "name": "fuchsia",
                "hex": "ff00ff",
                "rgb": {
                    "r":  255,
                    "g":  0,
                    "b":  255
                }
            },
            {
                "name": "gainsboro",
                "hex": "dcdcdc",
                "rgb": {
                    "r":  220,
                    "g":  220,
                    "b":  220
                }
            },
            {
                "name": "ghostwhite",
                "hex": "f8f8ff",
                "rgb": {
                    "r":  248,
                    "g":  248,
                    "b":  255
                }
            },
            {
                "name": "gold",
                "hex": "ffd700",
                "rgb": {
                    "r":  255,
                    "g":  215,
                    "b":  0
                }
            },
            {
                "name": "goldenrod",
                "hex": "daa520",
                "rgb": {
                    "r":  218,
                    "g":  165,
                    "b":  32
                }
            },
            {
                "name": "gray",
                "hex": "808080",
                "rgb": {
                    "r":  128,
                    "g":  128,
                    "b":  128
                }
            },
            {
                "name": "green",
                "hex": "008000",
                "rgb": {
                    "r":  0,
                    "g":  128,
                    "b":  0
                }
            },
            {
                "name": "greenyellow",
                "hex": "adff2f",
                "rgb": {
                    "r":  173,
                    "g":  255,
                    "b":  47
                }
            },
            {
                "name": "grey",
                "hex": "808080",
                "rgb": {
                    "r":  128,
                    "g":  128,
                    "b":  128
                }
            },
            {
                "name": "honeydew",
                "hex": "f0fff0",
                "rgb": {
                    "r":  240,
                    "g":  255,
                    "b":  240
                }
            },
            {
                "name": "hotpink",
                "hex": "ff69b4",
                "rgb": {
                    "r":  255,
                    "g":  105,
                    "b":  180
                }
            },
            {
                "name": "indianred",
                "hex": "cd5c5c",
                "rgb": {
                    "r":  205,
                    "g":  92,
                    "b":  92
                }
            },
            {
                "name": "indigo",
                "hex": "4b0082",
                "rgb": {
                    "r":  75,
                    "g":  0,
                    "b":  130
                }
            },
            {
                "name": "ivory",
                "hex": "fffff0",
                "rgb": {
                    "r":  255,
                    "g":  255,
                    "b":  240
                }
            },
            {
                "name": "khaki",
                "hex": "f0e68c",
                "rgb": {
                    "r":  240,
                    "g":  230,
                    "b":  140
                }
            },
            {
                "name": "lavender",
                "hex": "e6e6fa",
                "rgb": {
                    "r":  230,
                    "g":  230,
                    "b":  250
                }
            },
            {
                "name": "lavenderblush",
                "hex": "fff0f5",
                "rgb": {
                    "r":  255,
                    "g":  240,
                    "b":  245
                }
            },
            {
                "name": "lawngreen",
                "hex": "7cfc00",
                "rgb": {
                    "r":  124,
                    "g":  252,
                    "b":  0
                }
            },
            {
                "name": "lemonchiffon",
                "hex": "fffacd",
                "rgb": {
                    "r":  255,
                    "g":  250,
                    "b":  205
                }
            },
            {
                "name": "lightblue",
                "hex": "add8e6",
                "rgb": {
                    "r":  173,
                    "g":  216,
                    "b":  230
                }
            },
            {
                "name": "lightcoral",
                "hex": "f08080",
                "rgb": {
                    "r":  240,
                    "g":  128,
                    "b":  128
                }
            },
            {
                "name": "lightcyan",
                "hex": "e0ffff",
                "rgb": {
                    "r":  224,
                    "g":  255,
                    "b":  255
                }
            },
            {
                "name": "lightgoldenrodyellow",
                "hex": "fafad2",
                "rgb": {
                    "r":  250,
                    "g":  250,
                    "b":  210
                }
            },
            {
                "name": "lightgray",
                "hex": "d3d3d3",
                "rgb": {
                    "r":  211,
                    "g":  211,
                    "b":  211
                }
            },
            {
                "name": "lightgreen",
                "hex": "90ee90",
                "rgb": {
                    "r":  144,
                    "g":  238,
                    "b":  144
                }
            },
            {
                "name": "lightgrey",
                "hex": "d3d3d3",
                "rgb": {
                    "r":  211,
                    "g":  211,
                    "b":  211
                }
            },
            {
                "name": "lightpink",
                "hex": "ffb6c1",
                "rgb": {
                    "r":  255,
                    "g":  182,
                    "b":  193
                }
            },
            {
                "name": "lightsalmon",
                "hex": "ffa07a",
                "rgb": {
                    "r":  255,
                    "g":  160,
                    "b":  122
                }
            },
            {
                "name": "lightseagreen",
                "hex": "20b2aa",
                "rgb": {
                    "r":  32,
                    "g":  178,
                    "b":  170
                }
            },
            {
                "name": "lightskyblue",
                "hex": "87cefa",
                "rgb": {
                    "r":  135,
                    "g":  206,
                    "b":  250
                }
            },
            {
                "name": "lightslategray",
                "hex": "778899",
                "rgb": {
                    "r":  119,
                    "g":  136,
                    "b":  153
                }
            },
            {
                "name": "lightslategrey",
                "hex": "778899",
                "rgb": {
                    "r":  119,
                    "g":  136,
                    "b":  153
                }
            },
            {
                "name": "lightsteelblue",
                "hex": "b0c4de",
                "rgb": {
                    "r":  176,
                    "g":  196,
                    "b":  222
                }
            },
            {
                "name": "lightyellow",
                "hex": "ffffe0",
                "rgb": {
                    "r":  255,
                    "g":  255,
                    "b":  224
                }
            },
            {
                "name": "lime",
                "hex": "00ff00",
                "rgb": {
                    "r":  0,
                    "g":  255,
                    "b":  0
                }
            },
            {
                "name": "limegreen",
                "hex": "32cd32",
                "rgb": {
                    "r":  50,
                    "g":  205,
                    "b":  50
                }
            },
            {
                "name": "linen",
                "hex": "faf0e6",
                "rgb": {
                    "r":  250,
                    "g":  240,
                    "b":  230
                }
            },
            {
                "name": "magenta",
                "hex": "ff00ff",
                "rgb": {
                    "r":  255,
                    "g":  0,
                    "b":  255
                }
            },
            {
                "name": "maroon",
                "hex": "800000",
                "rgb": {
                    "r":  128,
                    "g":  0,
                    "b":  0
                }
            },
            {
                "name": "mediumaquamarine",
                "hex": "66cdaa",
                "rgb": {
                    "r":  102,
                    "g":  205,
                    "b":  170
                }
            },
            {
                "name": "mediumblue",
                "hex": "0000cd",
                "rgb": {
                    "r":  0,
                    "g":  0,
                    "b":  205
                }
            },
            {
                "name": "mediumorchid",
                "hex": "ba55d3",
                "rgb": {
                    "r":  186,
                    "g":  85,
                    "b":  211
                }
            },
            {
                "name": "mediumpurple",
                "hex": "9370db",
                "rgb": {
                    "r":  147,
                    "g":  112,
                    "b":  219
                }
            },
            {
                "name": "mediumseagreen",
                "hex": "3cb371",
                "rgb": {
                    "r":  60,
                    "g":  179,
                    "b":  113
                }
            },
            {
                "name": "mediumslateblue",
                "hex": "7b68ee",
                "rgb": {
                    "r":  123,
                    "g":  104,
                    "b":  238
                }
            },
            {
                "name": "mediumspringgreen",
                "hex": "00fa9a",
                "rgb": {
                    "r":  0,
                    "g":  250,
                    "b":  154
                }
            },
            {
                "name": "mediumturquoise",
                "hex": "48d1cc",
                "rgb": {
                    "r":  72,
                    "g":  209,
                    "b":  204
                }
            },
            {
                "name": "mediumvioletred",
                "hex": "c71585",
                "rgb": {
                    "r":  199,
                    "g":  21,
                    "b":  133
                }
            },
            {
                "name": "midnightblue",
                "hex": "191970",
                "rgb": {
                    "r":  25,
                    "g":  25,
                    "b":  112
                }
            },
            {
                "name": "mintcream",
                "hex": "f5fffa",
                "rgb": {
                    "r":  245,
                    "g":  255,
                    "b":  250
                }
            },
            {
                "name": "mistyrose",
                "hex": "ffe4e1",
                "rgb": {
                    "r":  255,
                    "g":  228,
                    "b":  225
                }
            },
            {
                "name": "moccasin",
                "hex": "ffe4b5",
                "rgb": {
                    "r":  255,
                    "g":  228,
                    "b":  181
                }
            },
            {
                "name": "navajowhite",
                "hex": "ffdead",
                "rgb": {
                    "r":  255,
                    "g":  222,
                    "b":  173
                }
            },
            {
                "name": "navy",
                "hex": "000080",
                "rgb": {
                    "r":  0,
                    "g":  0,
                    "b":  128
                }
            },
            {
                "name": "oldlace",
                "hex": "fdf5e6",
                "rgb": {
                    "r":  253,
                    "g":  245,
                    "b":  230
                }
            },
            {
                "name": "olive",
                "hex": "808000",
                "rgb": {
                    "r":  128,
                    "g":  128,
                    "b":  0
                }
            },
            {
                "name": "olivedrab",
                "hex": "6b8e23",
                "rgb": {
                    "r":  107,
                    "g":  142,
                    "b":  35
                }
            },
            {
                "name": "orange",
                "hex": "ffa500",
                "rgb": {
                    "r":  255,
                    "g":  165,
                    "b":  0
                }
            },
            {
                "name": "orangered",
                "hex": "ff4500",
                "rgb": {
                    "r":  255,
                    "g":  69,
                    "b":  0
                }
            },
            {
                "name": "orchid",
                "hex": "da70d6",
                "rgb": {
                    "r":  218,
                    "g":  112,
                    "b":  214
                }
            },
            {
                "name": "palegoldenrod",
                "hex": "eee8aa",
                "rgb": {
                    "r":  238,
                    "g":  232,
                    "b":  170
                }
            },
            {
                "name": "palegreen",
                "hex": "98fb98",
                "rgb": {
                    "r":  152,
                    "g":  251,
                    "b":  152
                }
            },
            {
                "name": "paleturquoise",
                "hex": "afeeee",
                "rgb": {
                    "r":  175,
                    "g":  238,
                    "b":  238
                }
            },
            {
                "name": "palevioletred",
                "hex": "db7093",
                "rgb": {
                    "r":  219,
                    "g":  112,
                    "b":  147
                }
            },
            {
                "name": "papayawhip",
                "hex": "ffefd5",
                "rgb": {
                    "r":  255,
                    "g":  239,
                    "b":  213
                }
            },
            {
                "name": "peachpuff",
                "hex": "ffdab9",
                "rgb": {
                    "r":  255,
                    "g":  218,
                    "b":  185
                }
            },
            {
                "name": "peru",
                "hex": "cd853f",
                "rgb": {
                    "r":  205,
                    "g":  133,
                    "b":  63
                }
            },
            {
                "name": "pink",
                "hex": "ffc0cb",
                "rgb": {
                    "r":  255,
                    "g":  192,
                    "b":  203
                }
            },
            {
                "name": "plum",
                "hex": "dda0dd",
                "rgb": {
                    "r":  221,
                    "g":  160,
                    "b":  221
                }
            },
            {
                "name": "powderblue",
                "hex": "b0e0e6",
                "rgb": {
                    "r":  176,
                    "g":  224,
                    "b":  230
                }
            },
            {
                "name": "purple",
                "hex": "800080",
                "rgb": {
                    "r":  128,
                    "g":  0,
                    "b":  128
                }
            },
            {
                "name": "red",
                "hex": "ff0000",
                "rgb": {
                    "r":  255,
                    "g":  0,
                    "b":  0
                }
            },
            {
                "name": "rosybrown",
                "hex": "bc8f8f",
                "rgb": {
                    "r":  188,
                    "g":  143,
                    "b":  143
                }
            },
            {
                "name": "royalblue",
                "hex": "4169e1",
                "rgb": {
                    "r":  65,
                    "g":  105,
                    "b":  225
                }
            },
            {
                "name": "saddlebrown",
                "hex": "8b4513",
                "rgb": {
                    "r":  139,
                    "g":  69,
                    "b":  19
                }
            },
            {
                "name": "salmon",
                "hex": "fa8072",
                "rgb": {
                    "r":  250,
                    "g":  128,
                    "b":  114
                }
            },
            {
                "name": "sandybrown",
                "hex": "f4a460",
                "rgb": {
                    "r":  244,
                    "g":  164,
                    "b":  96
                }
            },
            {
                "name": "seagreen",
                "hex": "2e8b57",
                "rgb": {
                    "r":  46,
                    "g":  139,
                    "b":  87
                }
            },
            {
                "name": "seashell",
                "hex": "fff5ee",
                "rgb": {
                    "r":  255,
                    "g":  245,
                    "b":  238
                }
            },
            {
                "name": "sienna",
                "hex": "a0522d",
                "rgb": {
                    "r":  160,
                    "g":  82,
                    "b":  45
                }
            },
            {
                "name": "silver",
                "hex": "c0c0c0",
                "rgb": {
                    "r":  192,
                    "g":  192,
                    "b":  192
                }
            },
            {
                "name": "skyblue",
                "hex": "87ceeb",
                "rgb": {
                    "r":  135,
                    "g":  206,
                    "b":  235
                }
            },
            {
                "name": "slateblue",
                "hex": "6a5acd",
                "rgb": {
                    "r":  106,
                    "g":  90,
                    "b":  205
                }
            },
            {
                "name": "slategray",
                "hex": "708090",
                "rgb": {
                    "r":  112,
                    "g":  128,
                    "b":  144
                }
            },
            {
                "name": "slategrey",
                "hex": "708090",
                "rgb": {
                    "r":  112,
                    "g":  128,
                    "b":  144
                }
            },
            {
                "name": "snow",
                "hex": "fffafa",
                "rgb": {
                    "r":  255,
                    "g":  250,
                    "b":  250
                }
            },
            {
                "name": "springgreen",
                "hex": "00ff7f",
                "rgb": {
                    "r":  0,
                    "g":  255,
                    "b":  127
                }
            },
            {
                "name": "steelblue",
                "hex": "4682b4",
                "rgb": {
                    "r":  70,
                    "g":  130,
                    "b":  180
                }
            },
            {
                "name": "tan",
                "hex": "d2b48c",
                "rgb": {
                    "r":  210,
                    "g":  180,
                    "b":  140
                }
            },
            {
                "name": "teal",
                "hex": "008080",
                "rgb": {
                    "r":  0,
                    "g":  128,
                    "b":  128
                }
            },
            {
                "name": "thistle",
                "hex": "d8bfd8",
                "rgb": {
                    "r":  216,
                    "g":  191,
                    "b":  216
                }
            },
            {
                "name": "tomato",
                "hex": "ff6347",
                "rgb": {
                    "r":  255,
                    "g":  99,
                    "b":  71
                }
            },
            {
                "name": "turquoise",
                "hex": "40e0d0",
                "rgb": {
                    "r":  64,
                    "g":  224,
                    "b":  208
                }
            },
            {
                "name": "violet",
                "hex": "ee82ee",
                "rgb": {
                    "r":  238,
                    "g":  130,
                    "b":  238
                }
            },
            {
                "name": "wheat",
                "hex": "f5deb3",
                "rgb": {
                    "r":  245,
                    "g":  222,
                    "b":  179
                }
            },
            {
                "name": "white",
                "hex": "ffffff",
                "rgb": {
                    "r":  255,
                    "g":  255,
                    "b":  255
                }
            },
            {
                "name": "whitesmoke",
                "hex": "f5f5f5",
                "rgb": {
                    "r":  245,
                    "g":  245,
                    "b":  245
                }
            },
            {
                "name": "yellow",
                "hex": "ffff00",
                "rgb": {
                    "r":  255,
                    "g":  255,
                    "b":  0
                }
            },
            {
                "name": "yellowgreen",
                "hex": "9acd32",
                "rgb": {
                    "r":  154,
                    "g":  205,
                    "b":  50
                }
            }
        ];

    }

    function printEventObj(e){
        console.log(e)
    }

    function validator(blueprint, input, fn){
        let errorstr = `Error in function: ${fn}\n`;
        let errortest = errorstr;
        if(typeof blueprint == 'object' && blueprint != null) blueprint = [blueprint];
        for(const prop of blueprint){
            //existance validation
            if(prop.req && input[prop.name] == undefined){
                errorstr += `Expected property: ${prop.name} not found in input\n`;
            } else {
                if(!prop.req && input[prop.name] == undefined) continue;
                //type validation
                let p = input[prop.name];
                if(typeof p != prop.type){
                    errorstr += `Type Error. In property: '${prop.name}', expected type: ${prop.type} actual type: ${typeof p}\n`;
                } else {
                    //value validation
                    switch (prop.type) {
                        case 'object':
                            if(p == null) errorstr += `Value Error. In property: '${prop.name}', object is NULL\n`;
                            break;
                        case 'number':
                            if(prop.min != undefined && p < prop.min)
                                errorstr += `Value Error. In property: '${prop.name}', value should not be less than ${prop.min}, value provided: ${p}\n`;
                            else if(prop.max != undefined && p > prop.max)
                                errorstr += `Value Error. In property: '${prop.name}', value should not be greater than ${prop.max}, value provided: ${p}\n`;
                                break;
                        case 'string':
                            if(prop.reg != undefined && !prop.reg.test(p))
                                errorstr += `Value Error. In property: '${prop.name}', value should match regex: ${prop.reg}, value provided: ${p}\n`;
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        if(errortest == errorstr){
            return true;
        } else {
            console.error(errorstr);
            return false;
        }
    }


    let testslider = createElementSB('slider');
    document.body.appendChild(testslider);
    testslider.setup();
    testslider.addListener('change', printEventObj);

    let testcheckbox = createElementSB('checkbox');
    document.body.appendChild(testcheckbox);
    testcheckbox.addListener('change', printEventObj);
    // testcheckbox.content = '🅱';

    let testradio = createElementSB('radio', {n: 4, labels: ['poo', 'big poo', 'OMEGA big poo', '🔥'], value: 0});
    document.body.appendChild(testradio);
    testradio.addListener('change', printEventObj);

    let testdslider = createElementSB('dualslider');
    document.body.appendChild(testdslider);
    testdslider.setup();
    testdslider.addListener('change', printEventObj, {final: true, user: true});
    testdslider.value = {min: 0.1, max: 0.9};

    // let testhex = '#b22b64'
    // let testrgba = hexToRGBA(testhex);
    // console.log(testrgba);
    // document.body.style.backgroundColor = testrgba.val;

    // console.log(SBColour.RGBtoHSL(200, 171, 248));
    // //console.log(SBColour.HSLtoRGB(62, 84, 53));
    // //console.log(SBColour.HSLtoRGB(SBColour.RGBtoHSL(127, 16, 222)));

    // console.log(SBColour.RGBtoHEX(180, 77, 34, 0.5));
    // console.log(SBColour.HEXtoRGB('#02156e'));

    // console.log(SBColour.CSStoRGB('deepskyblue'));
    // console.log(SBColour.RGBtoCSS(0, 191, 255));

    // console.log(SBColour.CSStoHEX('darkslategrey'));
    // console.log(SBColour.HSLtoHEX(235, 70, 50, 0.4));
    // console.log(SBColour.HSLtoCSS(SBColour.CSStoHSL('bisque', 0.8)));
    // console.log(SBColour.HEXtoCSS('#d2691e'));
    // console.log(SBColour.HEXtoHSL('#dc143c'));
    
    
    // let testobj = {a: 1, b:2, c: 3};
    // ({a: x, b: y, c: z} = testobj);
    // console.log(y);
    let c = new SBColour('css', 'beige');
    console.log(c.css);
    c.hex = '#f0a';
    console.log(c.rgb);
    console.log(c.val('rgb'));

}