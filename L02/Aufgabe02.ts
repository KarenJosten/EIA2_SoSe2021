namespace EventInspector {
    window.addEventListener("load", handleLoad);

    function handleLoad (): void {
      
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");

        body.addEventListener("mousemove", setInfoBox);
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
   
        let div: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");

        for (let i: number = 0; i < div.length; i++) {
            div[i].addEventListener("click", logInfo);
            div[i].addEventListener("keyup", logInfo);
        }
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        //console.log(_event);
        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
        let target: HTMLElement = <HTMLElement>_event.target;

        let mousepositionX: number = _event.clientX + 10;
        let mousepositionY: number = _event.clientY + 10;

        span.style.top = mousepositionY + "px"; 
        span.style.left = mousepositionX + "px";

        span.innerHTML = "";
        span.innerHTML = "Position X: " + mousepositionX + "<br>" + "Position Y: " + mousepositionY + "<br>" + target;
    }

    function logInfo(_event: Event): void {
        console.log("Event Type: " + _event.type);
        console.log("Event Target: " + _event.target);
        console.log("Current Target: " + _event.currentTarget);
        console.log(_event);
    }
}