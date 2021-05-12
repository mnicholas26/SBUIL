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

    //USEFUL FUNCTIONS

    //COLOUR STUFF
    function hexToRGBA(str, alpha = false, opacity){
        let hexreg = /#[abcdef\d]{8}|#[abcdef\d]{6}/i;
        let reg = /\w{2}/g || [];
        if(hexreg.test(str)){
            let [r,g,b,a] = str.match(reg);
            if(a == undefined) a = 'ff';
            r = parseInt(r, 16);
            g = parseInt(g, 16);
            b = parseInt(b, 16);
            a = opacity != undefined ? opacity : parseInt(a, 16)/255;
            let val = 'rgb';
            if(alpha) val += 'a'
            val += `(${r}, ${g}, ${b}`
            if(alpha) val += `, ${a.toFixed(2)}`;
            val += ')';
            return {
                r: r,
                g: g,
                b: b,
                a: a,
                val: val
            }
        } else {
            console.error(`String: ${str} is not a correctly formatted hex colour string`);
            return false;
        }
    }

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
        _val = undefined;
        _hex = '#000000';
        _css = 'black';

        constructor(type = 'rgb', r = 0, g = 0, b = 0, a = 1){
            if(type == 'rgb'){
                //
            } else if(type = 'hsl'){
                //
            } else {
                console.error(`Colour type must be 'rgb' or 'hsl'. Value provided: ${type}`);
            }
            _r = r;
            _g = g;
            _b = b;
            _type = type;
            _a = a;
        }

        static RGBtoHSL(...args){
            let r, g, b, a, alpha = false, opts = {};

            if(args.length > 1 && typeof args[args.length - 1] == 'object' && args[args.length - 1] != null) opts = args.pop();
            let options = {
                round: (opts.round) ? true : false,
                decimal: (opts.decimal) ? true : false
            }

            if(args.length == 1 && typeof args[0] == 'object' && args[0] != null){
                if(args[0].r != undefined && args[0].g != undefined && args[0].b != undefined){
                    r = args[0].r;
                    g = args[0].g;
                    b = args[0].b;
                    if(args[0].a != undefined){
                        alpha = true;
                        a = args[0].a;
                    }
                } else console.error(`Passed object requires 'r', 'g' and 'b' properties`);
            } else if(args.length == 3) {
                [r, g, b] = args;
            } else if(args.length == 4) {
                alpha = true;
                [r, g, b, a] = args;
            } else {
                console.error(`Arguement error: Please pass either an object with RGB properties or r, g, b and possibly a values`);
                return;
            }

            //sanity checking
            if(typeof r == 'number'){
                if(r < 0 || r > 255){
                    console.error(`'r' value must be between 0 and 255, provided value: ${r}`);
                    return;
                }
            } else console.error(`'r' value must be a number, provided type: ${typeof r}`);
            if(typeof g == 'number'){
                if(g < 0 || g > 255){
                    console.error(`'g' value must be between 0 and 255, provided value: ${g}`);
                    return;
                }
            } else console.error(`'g' value must be a number, provided type: ${typeof g}`);
            if(typeof b == 'number'){
                if(b < 0 || b > 255){
                    console.error(`'b' value must be between 0 and 255, provided value: ${b}`);
                    return;
                }
            } else console.error(`'b' value must be a number, provided type: ${typeof b}`);
            if(a != undefined){
                if(typeof a == 'number'){
                    if(a < 0 || a > 1){
                        console.error(`if 'a' value is provided it must be between 0 and 1, provided value: ${a}`);
                        return;
                    }
                } else console.error(`if 'a' value is provided it must be a number, provided type: ${typeof a}`);
            }

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

            // let out = {
            //     h: Math.round(h),
            //     s: Math.round(s * 1000) / 10,
            //     l: Math.round(l * 1000) / 10
            // }

            let out = {
                h: options.round ? Math.round(h) : h,
                s: options.decimal ? s : options.round ? Math.round(s * 1000) / 10 : s * 100,
                l: options.decimal ? l : options.round ? Math.round(l * 1000) / 10 : l * 100
            }

            if(alpha) out.a = a;

            return out;
        }

        static HSLtoRGB(...args){
            let h, s, l, a, alpha = false, opts = {};

            if(args.length > 1 && typeof args[args.length - 1] == 'object' && args[args.length - 1] != null) opts = args.pop();
            let options = {
                round: (opts.round) ? true : false,
                decimal: (opts.decimal) ? true : false
            }

            if(args.length == 1 && typeof args[0] == 'object' && args[0] != null){
                if(args[0].h != undefined && args[0].s != undefined && args[0].l != undefined){
                    h = args[0].h;
                    s = args[0].s;
                    l = args[0].l;
                    if(args[0].a != undefined){
                        alpha = true;
                        a = args[0].a;
                    }
                } else console.error(`Passed object requires 'h', 's' and 'l' properties`);
            } else if(args.length == 3) {
                [h, s, l] = args;
            } else if(args.length == 4) {
                alpha = true;
                [h, s, l, a] = args;
            } else {
                console.error(`Arguement error: Please pass either an object with HSL properties or h, s, l and possibly a values`);
                return;
            }

            //sanity checking
            if(typeof h == 'number'){
                if(h < 0 || h > 360){
                    console.error(`'h' value must be between 0 and 360, provided value: ${h}`);
                    return;
                }
            } else console.error(`'h' value must be a number, provided type: ${typeof h}`);
            if(typeof s == 'number'){
                if(s < 0 || s > 100){
                    console.error(`'s' value must be between 0 and 100, provided value: ${s}`);
                    return;
                }
            } else console.error(`'s' value must be a number, provided type: ${typeof s}`);
            if(typeof l == 'number'){
                if(l < 0 || l > 100){
                    console.error(`'l' value must be between 0 and 100, provided value: ${l}`);
                    return;
                }
            } else console.error(`'l' value must be a number, provided type: ${typeof l}`);
            if(a != undefined){
                if(typeof a == 'number'){
                    if(a < 0 || a > 1){
                        console.error(`if 'a' value is provided it must be between 0 and 1, provided value: ${a}`);
                        return;
                    }
                } else console.error(`if 'a' value is provided it must be a number, provided type: ${typeof a}`);
            }

            let r, g, b;
            if(!options.decimal){
                s /= 100;
                l /= 100;
            }
            
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
                r: options.round ? Math.round(r) : r,
                g: options.round ? Math.round(g) : g,
                b: options.round ? Math.round(b) : b
            }

            if(alpha) out.a = a;

            return out;
        }

        static RGBtoHEX(...args){
            let r, g, b, a, alpha = false, opts = {};

            if(args.length > 1 && typeof args[args.length - 1] == 'object' && args[args.length - 1] != null) opts = args.pop();
            let options = {}

            if(args.length == 1 && typeof args[0] == 'object' && args[0] != null){
                if(args[0].r != undefined && args[0].g != undefined && args[0].b != undefined){
                    r = args[0].r;
                    g = args[0].g;
                    b = args[0].b;
                    if(args[0].a != undefined){
                        alpha = true;
                        a = args[0].a;
                    }
                } else console.error(`Passed object requires 'r', 'g' and 'b' properties`);
            } else if(args.length == 3) {
                [r, g, b] = args;
            } else if(args.length == 4) {
                alpha = true;
                [r, g, b, a] = args;
            } else {
                console.error(`Arguement error: Please pass either an object with RGB properties or r, g, b and possibly a values`);
                return;
            }

            //sanity checking
            if(typeof r == 'number'){
                if(r < 0 || r > 255){
                    console.error(`'r' value must be between 0 and 255, provided value: ${r}`);
                    return;
                }
            } else console.error(`'r' value must be a number, provided type: ${typeof r}`);
            if(typeof g == 'number'){
                if(g < 0 || g > 255){
                    console.error(`'g' value must be between 0 and 255, provided value: ${g}`);
                    return;
                }
            } else console.error(`'g' value must be a number, provided type: ${typeof g}`);
            if(typeof b == 'number'){
                if(b < 0 || b > 255){
                    console.error(`'b' value must be between 0 and 255, provided value: ${b}`);
                    return;
                }
            } else console.error(`'b' value must be a number, provided type: ${typeof b}`);
            if(a != undefined){
                if(typeof a == 'number'){
                    if(a < 0 || a > 1){
                        console.error(`if 'a' value is provided it must be between 0 and 1, provided value: ${a}`);
                        return;
                    }
                } else console.error(`if 'a' value is provided it must be a number, provided type: ${typeof a}`);
            }

            let hex = '#';
            hex += r.toString(16) + g.toString(16) + b.toString(16);
            if(alpha) {
                a*=255
                hex += a.toString(16);
            }

            return hex;
        }

    }

    function stringToColour(str){
        //
    }

    function printEventObj(e){
        console.log(e)
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

    let testhex = '#b22b64'
    let testrgba = hexToRGBA(testhex);
    console.log(testrgba);
    document.body.style.backgroundColor = testrgba.val;

    console.log(SBColour.RGBtoHSL(200, 171, 248));
    console.log(SBColour.HSLtoRGB(62, 84, 53));
    console.log(SBColour.HSLtoRGB(SBColour.RGBtoHSL(127, 16, 222)));

    console.log(SBColour.RGBtoHEX(38, 77, 244));
}