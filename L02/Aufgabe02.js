"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let body = document.querySelector("body");
        body.addEventListener("mousemove", setInfoBox);
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        let div = document.querySelectorAll("div");
        for (let i = 0; i < div.length; i++) {
            div[i].addEventListener("click", logInfo);
            div[i].addEventListener("keyup", logInfo);
        }
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        //console.log(_event);
        let span = document.querySelector("span");
        let target = _event.target;
        let mousepositionX = _event.clientX + 10;
        let mousepositionY = _event.clientY + 10;
        span.style.top = mousepositionY + "px";
        span.style.left = mousepositionX + "px";
        span.innerHTML = "";
        span.innerHTML = "Position X: " + mousepositionX + "<br>" + "Position Y: " + mousepositionY + "<br>" + target;
    }
    function logInfo(_event) {
        console.log("Event Type: " + _event.type);
        console.log("Event Target: " + _event.target);
        console.log("Current Target: " + _event.currentTarget);
        console.log(_event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=Aufgabe02.js.map