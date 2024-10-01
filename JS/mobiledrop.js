window.onload = function() {
    // find the element that you want to drag.
    var box1 = document.getElementById('box1');

    /* listen to the touchMove event,
    every time it fires, grab the location
    of touch and assign it to box */

    box1.addEventListener('touchmove', function(e) {
        // grab the location of touch
        var touchLocation1 = e.targetTouches[0];

        // assign box new coordinates based on the touch.
        box1.style.left = touchLocation1.pageX + 'px';
        box1.style.top = touchLocation1.pageY + 'px';
    })

    /* record the position of the touch
    when released using touchend event.
    This will be the drop position. */

    box1.addEventListener('touchend', function(e) {
        // current box position.
        var x1 = parseInt(box1.style.left);
        var y1 = parseInt(box1.style.top);
    })



    var box2 = document.getElementById('box2');
    box2.addEventListener('touchmove', function(e) {
        var touchLocation2 = e.targetTouches[0];

        // assign box new coordinates based on the touch.
        box2.style.left = touchLocation2.pageX + 'px';
        box2.style.top = touchLocation2.pageY + 'px';
    })

    box2.addEventListener('touchend', function(e) {
        // current box position.
        var x2 = parseInt(box2.style.left);
        var y2 = parseInt(box2.style.top);
    })



    var box3 = document.getElementById('box3');
    box3.addEventListener('touchmove', function(e) {
        var touchLocation3 = e.targetTouches[0];

        // assign box new coordinates based on the touch.
        box3.style.left = touchLocation3.pageX + 'px';
        box3.style.top = touchLocation3.pageY + 'px';
    })

    box3.addEventListener('touchend', function(e) {
        // current box position.
        var x3 = parseInt(box3.style.left);
        var y3 = parseInt(box3.style.top);
    })



    var box4 = document.getElementById('box4');
    box4.addEventListener('touchmove', function(e) {
        var touchLocation4 = e.targetTouches[0];

        // assign box new coordinates based on the touch.
        box4.style.left = touchLocation4.pageX + 'px';
        box4.style.top = touchLocation4.pageY + 'px';
    })

    box4.addEventListener('touchend', function(e) {
        // current box position.
        var x4 = parseInt(box4.style.left);
        var y4 = parseInt(box4.style.top);
    })


    var box5 = document.getElementById('box5');
    box5.addEventListener('touchmove', function(e) {
        var touchLocation5 = e.targetTouches[0];

        // assign box new coordinates based on the touch.
        box5.style.left = touchLocation5.pageX + 'px';
        box5.style.top = touchLocation5.pageY + 'px';
    })

    box5.addEventListener('touchend', function(e) {
        // current box position.
        var x5 = parseInt(box5.style.left);
        var y5 = parseInt(box5.style.top);
    })



    var box6 = document.getElementById('box6');
    box6.addEventListener('touchmove', function(e) {
        var touchLocation6 = e.targetTouches[0];

        // assign box new coordinates based on the touch.
        box6.style.left = touchLocation6.pageX + 'px';
        box6.style.top = touchLocation6.pageY + 'px';
    })

    box2.addEventListener('touchend', function(e) {
        // current box position.
        var x6 = parseInt(box6.style.left);
        var y6 = parseInt(box6.style.top);
    })



    var box7 = document.getElementById('box7');
    box7.addEventListener('touchmove', function(e) {
        var touchLocation7 = e.targetTouches[0];

        // assign box new coordinates based on the touch.
        box7.style.left = touchLocation7.pageX + 'px';
        box7.style.top = touchLocation7.pageY + 'px';
    })

    box7.addEventListener('touchend', function(e) {
        // current box position.
        var x7 = parseInt(box7.style.left);
        var y7 = parseInt(box7.style.top);
    })


    var box8 = document.getElementById('box8');
    box8.addEventListener('touchmove', function(e) {
        var touchLocation8 = e.targetTouches[0];

        // assign box new coordinates based on the touch.
        box8.style.left = touchLocation8.pageX + 'px';
        box8.style.top = touchLocation8.pageY + 'px';
    })

    box8.addEventListener('touchend', function(e) {
        // current box position.
        var x8 = parseInt(box8.style.left);
        var y8 = parseInt(box8.style.top);
    })


    var box9 = document.getElementById('box9');
    box9.addEventListener('touchmove', function(e) {
        var touchLocation9 = e.targetTouches[0];

        // assign box new coordinates based on the touch.
        box9.style.left = touchLocation9.pageX + 'px';
        box9.style.top = touchLocation9.pageY + 'px';
    })

    box9.addEventListener('touchend', function(e) {
        // current box position.
        var x9 = parseInt(box9.style.left);
        var y9 = parseInt(box9.style.top);
    })



}