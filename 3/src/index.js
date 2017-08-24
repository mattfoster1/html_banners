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
        case 9:
            document.getElementById("plainLogo_k").style.opacity = "1";
            document.getElementById("plainLogo_b").style.opacity = "0";
            document.getElementById("overlay_w").className += " visible";
            break;
        case 10:
            document.getElementById("pg2").style.display = "block";
            break;
        case 23:
            document.getElementById("pg3").style.display = "block";
            document.getElementById("mailto_exit").style.display = "block";
            document.getElementById("pg2").style.display = "none";
            loop_no = loop_no + 1;
            break;
        case 30:
            document.getElementById("plainLogo_k").style.opacity = "0";
            document.getElementById("plainLogo_b").style.opacity = "1";
            document.getElementById("bgr").classList.remove("zoomed");
            document.getElementById("overlay_w").classList.remove("visible");
            document.getElementById("pg3").style.display = "none";
            document.getElementById("mailto_exit").style.display = "none";
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
    Enabler.exit('PI_LeaderB Exit');
}

function mailto_exitHandler(e) {
    Enabler.exit('mailto_LeaderB Exit');
}

// function pg2_exitHandler(e) {
//     Enabler.exit('JohnGribben Exit');
// }

// function pg3_exitHandler(e) {
//     Enabler.exit('ClaireDearden Exit');
// }

// function pg4_exitHandler(e) {
//     Enabler.exit('PeterHillmen Exit');
// }

// function goToStep(n) {
//     console.log(n);
//     currentStep = nextStep;
    
//     switch (n) {
//         case 1:
            // document.getElementById("bgr").classList.remove("zoomed");
            // document.getElementById("overlay_w").classList.remove("visible");
            // document.getElementById("pg5").style.display = "none";
            // document.getElementById("mailto_exit").style.display = "none";
            // break;
//         case 2: 
//             document.getElementById("bgr").className += " zoomed";
//             break;
//         case 3:
//             document.getElementById("overlay_w").className += " visible";
//             break;
//         case 4:
//             document.getElementById("pg2").style.display = "block";
//             break;
//         case 5:
//             document.getElementById("pg3").style.display = "block";
//             document.getElementById("pg2").style.display = "none";
//             break;
//         case 6:
            // document.getElementById("pg4").style.display = "block";
            // document.getElementById("pg3").style.display = "none";
            // break;
//         case 7:
            // document.getElementById("pg5").style.display = "block";
            // document.getElementById("mailto_exit").style.display = "block";
            // document.getElementById("pg4").style.display = "none";
            // break;
//     }
// }

// TODO : put in a polite loader: https://support.google.com/richmedia/answer/2672514?hl=en&ref_topic=2672541 - required if over 200kb