//console.log("Expecto Patronum");

namespace RandomPoem {
    let subject: string[] = ["Ron Weasley", "Harry Potter", "Hermione Granger", "Neville Longbottom", "Luna Lovegood", "Draco Malfoy"];
    let predicates: string[] = ["belongs to", "hates", "loves", "is talking about", "is craving for", "is thinking about"];
    let object: string[] = ["Dumbledore", "Slytherin", "Hogsmeade", "Butterbeer", "Quidditch", "Hogwarts"];

    //console.log(subject, verb, object);

    for (let i: number = subject.length; i >= 1; i--) {
        getVerse(subject, predicates, object);
    }

    // tslint:disable-next-line: typedef
    function getVerse(_subject: string[], _predicates: string[], _object: string[]) {
        //console.log("Alohomora");
        let verse: string = "";
        let randomSubject: number = Math.floor(_subject.length * Math.random());
        //console.log(randomSubject);
        let randomVerb: number = Math.floor(_predicates.length * Math.random());
        let randomObject: number = Math.floor(_object.length * Math.random());

        verse = _subject.splice(randomSubject, 1)[0] + " " + _predicates.splice(randomVerb, 1)[0] + " " + _object.splice(randomObject, 1)[0];
        console.log(verse);
    }
}