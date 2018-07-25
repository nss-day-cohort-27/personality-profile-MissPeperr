/*
THIS IS THE DATABASE THAT HOLDS MY SECTIONS TO BE PLACED INSIDE OF MY INDEX.HTML
*/

const html = {
// these are the sections to be built
    // General Profile Section: Three statements that you agree with. Three statements that you don't agree with, and why
    profile: {
        // these are the items going inside of the sections
        one: "here's",
        two: "a",
        three: "thing"
    },
    // People Like Me Section: 4 people that share your personality type.
    people: {
        // what's going inside of each section
        one: "",
        two: "",
        three: "",
        four: ""
    },
    /*
    Comunication Section:
        How would I communicate best with my little sib.
        How would I like my instructors to communicate with me.
        How would I like my teammates to communicate with me
    */
   communication: {
       // what's going inside of each section
        lilSib: "",
        instructor: "",
        teammates: ""
   }
}

// function that converts the object into a string and sending it to the DOM
const saveSectionDB = function(HTMLobject, localStorageKey){
    // Convert the Object into a string.
    const stringifiedHTML = JSON.stringify(HTMLobject);
     //Create a key in local storage, and store the string version of your inventory database as the value
    localStorage.setItem(localStorageKey, stringifiedHTML);
}
// call the function in order to send the DB to the local storage
saveSectionDB(html, "HTML Sections:");