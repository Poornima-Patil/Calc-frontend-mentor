let num = document.getElementsByTagName("button");

let themeNum = 1;



let themes = Array.from(document.getElementsByClassName('radio-input'));
console.log(themes);

let buttons = Array.from(document.getElementsByTagName('button'));

let bodyTag = document.getElementsByTagName('body');
let calcContainer = document.getElementById("calc-container");

let outputContainer = document.getElementById("output-container");

let themeContainer = document.getElementById("themes-container");

let keypadContainer = document.getElementById("keypad-container");

let themeOptions = document.getElementById("theme-options");

let delBtn = document.getElementById('del-btn');

let resetBtn = document.getElementById('reset-btn');

let equalsBtn = document.getElementById('equals-btn');

selectTheme(themeNum);
themes.forEach(function(e) {

    e.addEventListener("click", function() {
        console.log('click event' + e.value);
        selectTheme(e.value);
    });
});


function selectTheme(themeNum) {
    console.log("themeNum " + themeNum);
    if (themeNum == 1) {
        console.log("Theme1")
        bodyTag[0].style.background = '#3B4664';
        calcContainer.style.background = '#3B4664';
        themeContainer.style.background = '#191F32';
        keypadContainer.style.background = '#191F32';
        outputContainer.style.background = '#191F32';
        calcContainer.style.color = 'white';
        outputContainer.style.color = 'white';
        themeOptions.style.color = 'white';



        for (let btn of buttons) {
            btn.style.background = '#e7e5e1';
            btn.style.color = 'black';
        }

        delBtn.style.background = '#647298';
        resetBtn.style.background = '#647298';
        equalsBtn.style.background = '#d13f30';

    } else if (themeNum == 2) {
        bodyTag[0].style.background = '#f0f0f0';
        calcContainer.style.background = '#f0f0f0';
        themeContainer.style.background = '#d4cdcd';
        keypadContainer.style.background = '#d4cdcd';
        outputContainer.style.background = '#efefef';
        calcContainer.style.color = 'black';
        outputContainer.style.color = 'black';
        themeOptions.style.color = 'black';



        for (let btn of buttons) {
            btn.style.background = '#e7e5e1';
            btn.style.color = 'black';
        }

        delBtn.style.background = '#3b8387';
        resetBtn.style.background = '#3b8387';
        equalsBtn.style.background = '#d13f30';
        console.log("Theme2")
    } else {
        bodyTag[0].style.background = '#170629';
        calcContainer.style.background = '#170629';
        themeContainer.style.background = '#170629';
        keypadContainer.style.background = '#170629';
        outputContainer.style.background = '#170629';

        calcContainer.style.color = '#f2da62';
        outputContainer.style.color = '#f2da62';
        themeOptions.style.color = '#f2da62';



        for (let btn of buttons) {
            btn.style.background = '#321a4d';
            themeOptions.style.color = '#f2da62';
            btn.style.color = '#f2da62';
        }

        delBtn.style.background = '#521272';
        resetBtn.style.background = '#521272';
        equalsBtn.style.background = '#00dece';
        equalsBtn.style.color = 'black';
        console.log("Theme 3")
    }
}


function calculate(num) {
    console.log(num);
    let outputTab = document.getElementById("output-container");
    outputTab.value += num;
}

function result() {
    console.log("Result called");
    let outputTab = document.getElementById("output-container");
    outputTab.value = eval(outputTab.value);
}

function reset() {
    let outputTab = document.getElementById("output-container");
    outputTab.value = '';
}

function del() {
    let outputTab = document.getElementById("output-container");
    outputTab.value = outputTab.value.slice(0, -1);
}