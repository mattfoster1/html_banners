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
    document.getElementById('pg2').addEventListener('click', pg2_exitHandler, false);
    document.getElementById('pg3').addEventListener('click', pg4_exitHandler, false);
    document.getElementById('pg4').addEventListener('click', pg4_exitHandler, false);
    document.getElementById('mailto_exit').addEventListener('click', mailto_exitHandler, false);
    
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
    console.log(loop_no);
    if (loop_no == 3) {
        clearInterval(mainTimer);
    }
    switch (t) {
        case 4:
            document.getElementById("bgr").className += " zoomed";
            break;
        case 8:
            document.getElementById("plainLogo_b").style.opacity = "1";
            document.getElementById("overlay_w").className += " visible";
            break;
        case 10:
            document.getElementById("pg2").style.display = "block";
            document.getElementById("whiteText").style.display = "none";
            document.getElementById("blueText").style.opacity = "1";
            document.getElementById("copy_watch_expert").style.display = "block";
            break;
        case 15:
            document.getElementById("pg3").style.display = "block";
            document.getElementById("pg2").style.display = "none";
            break;
        case 20:
            document.getElementById("pg4").style.display = "block";
            document.getElementById("pg3").style.display = "none";
            break;
        case 25:
            document.getElementById("copy_watch_expert").style.display = "none";
            document.getElementById("pg5").style.display = "block";
            document.getElementById("mailto_exit").style.display = "block";
            document.getElementById("pg4").style.display = "none";
            loop_no = loop_no + 1;
            break;
        case 30:
            document.getElementById("bgr").classList.remove("zoomed");
            document.getElementById("overlay_w").classList.remove("visible");
            document.getElementById("pg5").style.display = "none";
            document.getElementById("mailto_exit").style.display = "none";
            document.getElementById("whiteText").style.display = "block";
            document.getElementById("plainLogo_k").style.display = "block";
            document.getElementById("blueText").style.opacity = "0";
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
    Enabler.exit('PI_MPU Exit');
}

function mailto_exitHandler(e) {
    Enabler.exit('mailto_MPU Exit');
}

function pg2_exitHandler(e) {
    Enabler.exit('JohnGribben Exit');
}

function pg3_exitHandler(e) {
    Enabler.exit('ClaireDearden Exit');
}

function pg4_exitHandler(e) {
    Enabler.exit('PeterHillmen Exit');
}

// TODO : put in a polite loader: https://support.google.com/richmedia/answer/2672514?hl=en&ref_topic=2672541 - required if over 200kb