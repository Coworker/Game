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

    console.log(pic1.style.top);
    console.log(pic1.style.left);

    console.log(pic1.offsetTop);
    console.log(pic1.offsetLeft);
    pic1.style.top = pic1.offsetTop * 1.1 + 'px';
    pic1.style.left = pic1.offsetLeft * 1.1 + 'px';

    console.log(pic1.style.top);
    console.log(pic1.style.left);



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



document.getElementById("plusbutton").addEventListener("click", zoomIn);
document.getElementById("minusbutton").addEventListener("click", zoomOut);


//move map by mouse
document.addEventListener('DOMContentLoaded', function() {
    const ele = document.getElementById('mainscroll');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function(e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function() {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});