function initTimer(){t=0,loop_no=1,mainTimer=setInterval(function(){animationTrigger(),t+=1},500)}function animationTrigger(){switch(3==loop_no&&clearInterval(mainTimer),t){case 5:document.getElementById("bgr").className+=" zoomed";break;case 10:document.getElementById("abbvieLogo_b").style.opacity="1",document.getElementById("overlay_w").className+=" visible";break;case 11:document.getElementById("pg2").style.display="block";break;case 23:document.getElementById("pg3").style.display="block",document.getElementById("mailto_exit").style.display="block",document.getElementById("pg2").style.display="none",loop_no+=1;break;case 30:document.getElementById("bgr").classList.remove("zoomed"),document.getElementById("overlay_w").classList.remove("visible"),document.getElementById("pg3").style.display="none",document.getElementById("mailto_exit").style.display="none",document.getElementById("abbvieLogo_w").style.display="block",document.getElementById("abbvieLogo_b").style.opacity="0",t=0}}function enablerInitHandler(){}function bgExitHandler(e){Enabler.exit("PI_SkyS Exit")}function mailto_exitHandler(e){Enabler.exit("mailto_SkyS Exit")}var nextStep,currentStep,t,loop_no,mainTimer;window.onload=function(){document.getElementById("body");currentStep=1,Enabler.isInitialized()?enablerInitHandler():Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitHandler),document.getElementById("PI_exit").addEventListener("click",bgExitHandler,!1),document.getElementById("mailto_exit").addEventListener("click",mailto_exitHandler,!1),initTimer()};