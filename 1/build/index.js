function initTimer(){t=0,loop_no=1,mainTimer=setInterval(function(){animationTrigger(),t+=1},500)}function animationTrigger(){switch(console.log(loop_no),3==loop_no&&clearInterval(mainTimer),t){case 4:document.getElementById("bgr").className+=" zoomed";break;case 8:document.getElementById("abbvieLogo_b").style.opacity="1",document.getElementById("overlay_w").className+=" visible";break;case 10:document.getElementById("pg2").style.display="block",document.getElementById("whiteText").style.display="none",document.getElementById("blueText").style.opacity="1",document.getElementById("copy_watch_expert").style.display="block";break;case 15:document.getElementById("pg3").style.display="block",document.getElementById("pg2").style.display="none";break;case 20:document.getElementById("pg4").style.display="block",document.getElementById("pg3").style.display="none";break;case 25:document.getElementById("copy_watch_expert").style.display="none",document.getElementById("pg5").style.display="block",document.getElementById("mailto_exit").style.display="block",document.getElementById("pg4").style.display="none",loop_no+=1;break;case 30:document.getElementById("bgr").classList.remove("zoomed"),document.getElementById("overlay_w").classList.remove("visible"),document.getElementById("pg5").style.display="none",document.getElementById("mailto_exit").style.display="none",document.getElementById("whiteText").style.display="block",document.getElementById("abbvieLogo_w").style.display="block",document.getElementById("blueText").style.opacity="0",document.getElementById("abbvieLogo_b").style.opacity="0",t=0}}function enablerInitHandler(){}function bgExitHandler(e){Enabler.exit("PI_MPU Exit")}function mailto_exitHandler(e){Enabler.exit("mailto_MPU Exit")}function pg2_exitHandler(e){Enabler.exit("JohnGribben Exit")}function pg3_exitHandler(e){Enabler.exit("ClaireDearden Exit")}function pg4_exitHandler(e){Enabler.exit("PeterHillmen Exit")}var nextStep,currentStep,t,loop_no,mainTimer;window.onload=function(){document.getElementById("body");currentStep=1,Enabler.isInitialized()?enablerInitHandler():Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitHandler),document.getElementById("PI_exit").addEventListener("click",bgExitHandler,!1),document.getElementById("pg2").addEventListener("click",pg2_exitHandler,!1),document.getElementById("pg3").addEventListener("click",pg4_exitHandler,!1),document.getElementById("pg4").addEventListener("click",pg4_exitHandler,!1),document.getElementById("mailto_exit").addEventListener("click",mailto_exitHandler,!1),initTimer()};