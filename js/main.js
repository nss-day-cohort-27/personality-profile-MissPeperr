console.log("test", html.profile.one);

// Get the string version of the local storage
const sectionString = localStorage.getItem("HTML Sections:");

// Use JSON.parse() to convert the string back into an object
let data = JSON.parse(sectionString);

console.log(data);

const section = document.createElement("section");
const body = document.querySelector("body");
const script = document.querySelector("script");
// for in loop is looping through the keys inside of the object from local storage (data)
for (let item in data) {
    console.log("data:", data);
    const section = document.createElement("section");
    section.setAttribute("class", "section");
    body.appendChild(section).innerHTML = `${item}`;
    // // I want SECTION to be placed before the SCRIPT tag in my HTML
    body.insertBefore(section, script);
    for(let prop in data[item]){
        console.log("test:", item);
        const p = document.createElement("p");
        p.setAttribute("class", "keys");
        section.appendChild(p).innerHTML = `${item[data[prop]]}`;
        console.log("items:", data[item[prop]])
    }
    // console.log("will this work:", item);

}

