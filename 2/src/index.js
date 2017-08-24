var nextStep, currentStep, t, loop_no, mainTimer;

// If true, start function. If false, listen for INIT.
window.onload = function() {
    var body1 = document.getElementById("body");
    currentStep = 1;
    
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }
    document.getElementById('PI_exit').addEventListener('click', bgExitHandler, false);
    // document.getElementById('pg2').addEventListener('click', pg2_exitHandler, false);
    document.getElementById('mailto_exit').addEventListener('click', mailto_exitHandler, false);
    

    // body1.addEventListener('mouseup',function() { 
    //     nextStep = currentStep + 1;
    //     if (nextStep == 8) {
    //         nextStep = 1;
    //     }
    //     goToStep(nextStep);
    // },false);
    initTimer();
}

function initTimer() {
    t = 0;
    loop_no = 1;
    mainTimer = setInterval(function(){ 
        animationTrigger();
        t=t+1;
    }, 500);
}

function animationTrigger() {
    // console.log(loop_no);
    if (loop_no == 3) {
        clearInterval(mainTimer);
    }
    switch (t) {
        case 5:
            document.getElementById("bgr").className += " zoomed";
            break;
        case 10:
            document.getElementById("plainLogo_k").style.opacity = "1";
            document.getElementById("overlay_w").className += " visible";
            break;
        case 11:
            document.getElementById("pg2").style.display = "block";
            break;
        case 14:
            document.getElementById("pg3").style.display = "block";
            document.getElementById("mailto_exit").style.display = "block";
            document.getElementById("pg2").style.display = "none";
            loop_no = loop_no + 1;
            break;
        case 18:
            document.getElementById("bgr").classList.remove("zoomed");
            document.getElementById("overlay_w").classList.remove("visible");
            document.getElementById("pg3").style.display = "none";
            document.getElementById("mailto_exit").style.display = "none";
            document.getElementById("plainLogo_k").style.display = "block";
            document.getElementById("plainLogo_b").style.opacity = "0";
            t=0;
            break;
    }
}

function enablerInitHandler() {
  // Start polite loading, or start animation,
  // load in your image assets, call Enabler methods,
  // and/or include other Studio modules.
}

function bgExitHandler(e) {
//   Enabler.exitOverride('Background Exit', 'http://www.permanent-url.com');
    // console.log("foo");
    Enabler.exit('PI_SkyS Exit');
}

function mailto_exitHandler(e) {
    Enabler.exit('mailto_SkyS Exit');
}

// TODO : put in a polite loader: https://support.google.com/richmedia/answer/2672514?hl=en&ref_topic=2672541 - required if over 200kb