"use strict";
//console.log("Expecto Patronum");
var RandomPoem;
(function (RandomPoem) {
    let subject = ["Ron Weasley", "Harry Potter", "Hermione Granger", "Neville Longbottom", "Luna Lovegood", "Draco Malfoy"];
    let predicates = ["belongs to", "hates", "loves", "is talking about", "is craving for", "is thinking about"];
    let object = ["Dumbledore", "Slytherin", "Hogsmeade", "Butterbeer", "Quidditch", "Hogwarts"];
    //console.log(subject, verb, object);
    for (let i = subject.length; i >= 1; i--) {
        getVerse(subject, predicates, object);
    }
    // tslint:disable-next-line: typedef
    function getVerse(_subject, _predicates, _object) {
        //console.log("Alohomora");
        let verse = "";
        let randomSubject = Math.floor(_subject.length * Math.random());
        //console.log(randomSubject);
        let randomPredicates = Math.floor(_predicates.length * Math.random());
        let randomObject = Math.floor(_object.length * Math.random());
        verse = _subject.splice(randomSubject, 1)[0] + " " + _predicates.splice(randomPredicates, 1)[0] + " " + _object.splice(randomObject, 1)[0];
        console.log(verse);
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=Aufgabe01.js.map