const pic1 = document.getElementById("box1");
const pic2 = document.getElementById("box2");
const pic3 = document.getElementById("box3");
const pic4 = document.getElementById("box4");
const pic5 = document.getElementById("box5");
const pic6 = document.getElementById("box6");
const pic7 = document.getElementById("box7");
const pic8 = document.getElementById("box8");
const pic9 = document.getElementById("box9");




function zoomIn() {

    const root1 = document.querySelector(":root")
    const style1 = getComputedStyle(root1);
    const width = style1.getPropertyValue('--width');

    const element = document.getElementById("blocksize");
    root1.style.setProperty("--width", element.clientWidth * 1.1 + 'px');


    pic1.style.top = pic1.offsetTop * 1.1 + 'px';
    pic1.style.left = pic1.offsetLeft * 1.1 + 'px';


    pic2.style.top = pic2.offsetTop * 1.1 + 'px';
    pic2.style.left = pic2.offsetLeft * 1.1 + 'px';
    pic3.style.top = pic3.offsetTop * 1.1 + 'px';
    pic3.style.left = pic3.offsetLeft * 1.1 + 'px';
    pic4.style.top = pic4.offsetTop * 1.1 + 'px';
    pic4.style.left = pic4.offsetLeft * 1.1 + 'px';
    pic5.style.top = pic5.offsetTop * 1.1 + 'px';
    pic5.style.left = pic5.offsetLeft * 1.1 + 'px';
    pic6.style.top = pic6.offsetTop * 1.1 + 'px';
    pic6.style.left = pic6.offsetLeft * 1.1 + 'px';
    pic7.style.top = pic7.offsetTop * 1.1 + 'px';
    pic7.style.left = pic7.offsetLeft * 1.1 + 'px';
    pic8.style.top = pic8.offsetTop * 1.1 + 'px';
    pic8.style.left = pic8.offsetLeft * 1.1 + 'px';
    pic9.style.top = pic9.offsetTop * 1.1 + 'px';
    pic9.style.left = pic9.offsetLeft * 1.1 + 'px';





}

function zoomOut() {
    const root1 = document.querySelector(":root")
    const style1 = getComputedStyle(root1);
    const width = style1.getPropertyValue('--width');

    const element = document.getElementById("blocksize");



    root1.style.setProperty("--width", element.clientWidth / 1.1 + 'px');



    pic1.style.top = pic1.offsetTop / 1.1 + 'px';
    pic1.style.left = pic1.offsetLeft / 1.1 + 'px';
    pic2.style.top = pic2.offsetTop / 1.1 + 'px';
    pic2.style.left = pic2.offsetLeft / 1.1 + 'px';
    pic3.style.top = pic3.offsetTop / 1.1 + 'px';
    pic3.style.left = pic3.offsetLeft / 1.1 + 'px';
    pic4.style.top = pic4.offsetTop / 1.1 + 'px';
    pic4.style.left = pic4.offsetLeft / 1.1 + 'px';
    pic5.style.top = pic5.offsetTop / 1.1 + 'px';
    pic5.style.left = pic5.offsetLeft / 1.1 + 'px';
    pic6.style.top = pic6.offsetTop / 1.1 + 'px';
    pic6.style.left = pic6.offsetLeft / 1.1 + 'px';
    pic7.style.top = pic7.offsetTop / 1.1 + 'px';
    pic7.style.left = pic7.offsetLeft / 1.1 + 'px';
    pic8.style.top = pic8.offsetTop / 1.1 + 'px';
    pic8.style.left = pic8.offsetLeft / 1.1 + 'px';
    pic9.style.top = pic9.offsetTop / 1.1 + 'px';
    pic9.style.left = pic9.offsetLeft / 1.1 + 'px';

}

function infoBlock() {

    var instr = document.getElementById('instr1');
    instr.style.visibility = "visible";
}

function CloseInfoBlock() {

    var instr = document.getElementById('instr1');
    instr.style.visibility = "hidden";
}


document.getElementById("plusbutton").addEventListener("click", zoomIn);
document.getElementById("minusbutton").addEventListener("click", zoomOut);
document.getElementById("infobutton").addEventListener("click", infoBlock);
document.getElementById("okbutton").addEventListener("click", CloseInfoBlock);