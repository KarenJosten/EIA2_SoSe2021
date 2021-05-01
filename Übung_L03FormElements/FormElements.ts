namespace L03_FormElements {

    window.addEventListener("load", handleLoad);

    let numberPairs: number;
    let allCards: Card[] = [];
    let propCards: string[] = [];

    let form: HTMLElement;
    let button: HTMLElement;
    let gameField: HTMLElement;
    //let timer: number = 0;
    //let startTimer: HTMLElement = <HTMLElement>.document.querySelector(".timer");

    interface Card {
        value: number;
        open: boolean;
    }

    let cards: Card[] = [
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

    function handleLoad(): void {
        form = <HTMLElement>document.querySelector("#form");
        form.addEventListener("change", handleChange);

        button = <HTMLElement>document.querySelector("#button");
        button.addEventListener("click", displayCards);

        gameField = <HTMLDivElement>document.querySelector("#showGameField");
        
       //startTimer = setInterval(function(): void {timer += 1; }, 1000);

        shuffleCards(allCards);
    }

    function handleChange(_event: Event): void {
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]);
        propCards = [];
        for (let entry of formData) {
            propCards.push(String(entry[1]));
        }            
    }

    function displayCards(): void {
        form.classList.add("hidden");
        button.classList.add("hidden");

        numberPairs = Number(propCards[0]);

        for (let i: number = 0; i < 2; i++) {
            for (let k: number = 0; k < numberPairs; k++) {
                allCards.push(cards[k]);
            }
        }
        gameField.innerHTML = "";
        //nur die background color ändert sich 
        document.body.style.background = propCards[3];
        document.body.style.fontFamily = propCards[0];
        
        for (let i: number = 0; i < allCards.length; i++) {

            let memoryCard: HTMLElement = <HTMLElement>document.createElement("div");

            memoryCard.style.width = propCards[2] + "px";
            memoryCard.style.height = propCards[2] + "px";
            memoryCard.style.background = propCards[4];
            memoryCard.style.color = propCards[5];
            memoryCard.innerHTML = "<span>" + allCards[i] + "</span>";

            gameField.appendChild(memoryCard);

            let span: NodeListOf<HTMLElement> = document.querySelectorAll("span");
            span[i].classList.add("visibility");
    }
}

    function shuffleCards(_array: Card[]): Card[] { 
 
    var temporaryCard: Card;
    var random: number;
    var index: number = _array.length;

    while (0 !== index) { 

        random = Math.floor(Math.random() * index);
        index--;
        temporaryCard = _array[index];
        _array[index] = _array[random];
        _array[random] = temporaryCard;
    }
    return _array;
    }

}