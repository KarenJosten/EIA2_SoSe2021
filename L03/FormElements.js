"use strict";
//nach 10 Stunden am Stück habe ich aufgegeben.. es wird nur die Hintergrundfarbe angezeigt und keine Karten
//werde die Aufgabe nachreichen
var L03_FormElements;
(function (L03_FormElements) {
    window.addEventListener("load", handleLoad);
    let numberPairs;
    let allCards = [];
    let propCards = [];
    let form;
    let button;
    let gameField;
    let cards = [
        {
            value: 1,
            open: false
        },
        {
            value: 2,
            open: false
        },
        {
            value: 3,
            open: false
        },
        {
            value: 4,
            open: false
        },
        {
            value: 5,
            open: false
        },
        {
            value: 6,
            open: false
        },
        {
            value: 7,
            open: false
        },
        {
            value: 8,
            open: false
        },
        {
            value: 9,
            open: false
        },
        {
            value: 10,
            open: false
        },
        {
            value: 11,
            open: false
        },
        {
            value: 12,
            open: false
        },
        {
            value: 13,
            open: false
        },
        {
            value: 14,
            open: false
        },
        {
            value: 15,
            open: false
        },
        {
            value: 16,
            open: false
        },
        {
            value: 17,
            open: false
        },
        {
            value: 18,
            open: false
        },
        {
            value: 19,
            open: false
        },
        {
            value: 20,
            open: false
        },
        {
            value: 21,
            open: false
        },
        {
            value: 22,
            open: false
        },
        {
            value: 23,
            open: false
        },
        {
            value: 24,
            open: false
        },
        {
            value: 25,
            open: false
        },
        {
            value: 2,
            open: false
        }
    ];
    function handleLoad() {
        form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        button = document.querySelector("#button");
        button.addEventListener("click", displayCards);
        gameField = document.querySelector("#showGameField");
        //startTimer = setInterval(function(): void {timer += 1; }, 1000);
        shuffleCards(allCards);
    }
    function handleChange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]);
        propCards = [];
        for (let entry of formData) {
            propCards.push(String(entry[1]));
        }
    }
    function displayCards() {
        form.classList.add("hidden");
        button.classList.add("hidden");
        numberPairs = Number(propCards[0]);
        for (let i = 0; i < 2; i++) {
            for (let k = 0; k < numberPairs; k++) {
                allCards.push(cards[k]);
            }
        }
        gameField.innerHTML = "";
        //nur die background color ändert sich 
        document.body.style.background = propCards[3];
        document.body.style.fontFamily = propCards[0];
        for (let i = 0; i < allCards.length; i++) {
            let memoryCard = document.createElement("div");
            memoryCard.style.width = propCards[2] + "px";
            memoryCard.style.height = propCards[2] + "px";
            memoryCard.style.background = propCards[4];
            memoryCard.style.color = propCards[5];
            memoryCard.innerHTML = "<span>" + allCards[i] + "</span>";
            gameField.appendChild(memoryCard);
            let span = document.querySelectorAll("span");
            span[i].classList.add("visibility");
        }
    }
    function shuffleCards(_array) {
        var temporaryCard;
        var random;
        var index = _array.length;
        while (0 !== index) {
            random = Math.floor(Math.random() * index);
            index--;
            temporaryCard = _array[index];
            _array[index] = _array[random];
            _array[random] = temporaryCard;
        }
        return _array;
    }
})(L03_FormElements || (L03_FormElements = {}));
/* function endGame(): void {
        alert("You are the winner!");
        window.location.reload();
    } */ 
//# sourceMappingURL=FormElements.js.map