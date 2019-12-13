'use strict';

/*
const [widthElem, heightElem] = document.getElementsByTagName('h1');

const input = document.querySelector('input[type="text"]');
const form = document.querySelector('form');



/!*window.onresize = refreshSizeValues;
window.onload = refreshSizeValues;
window.ondblclick = function(e) {
    console.log(e);
}
window.onkeypress = function(e) {
    console.log(e);
}*!/

input.onblur = logEvent;
input.addEventListener('input',logEvent);
input.onchange = logEvent;
input.oninput = logEvent;

/!*function refreshSizeValues(e) {
    console.log(e);
    widthElem.innerText = `Window width = ${window.innerWidth}px`;
    heightElem.innerText = `Window height = ${window.innerHeight}px`;

}*!/

function logEvent (e) {
    console.log(e);
    e.stopPropagation();
}*/

/*
const valueElem = document.querySelector('h1');

const rangeElem = document.querySelector('input[type="range"');

window.onload = refreshValue;

rangeElem.oninput = refreshValue;

function refreshValue() {
    valueElem.innerText = rangeElem.value;
}*/
/*
const COLOR_VALUE_PATTERN = /[0-9]{1,3}/g;
const DOCUMENT_BG_COLOR_KEY = "DOCUMENT_BG_COLOR_KEY";
const colorControls = document.querySelectorAll('label > input[type="range"]');

for(const input of colorControls) {
    input.oninput = refreshBodyBGColor;
}



function refreshBodyBGColor() {
    let value = "rgba(";
    const bgColor = [];
    colorControls.forEach(function(range, index, list){
        bgColor.push(range.value);
        if (index === list.length - 1) {
            value += range.value + ')';
            localStorage.setItem(DOCUMENT_BG_COLOR_KEY, JSON.stringify(bgColor));
        }

        else {
            value+= range.value + ',';
        }
    })
    document.body.style.backgroundColor = value;

}

window.onload = function() {
    const value = localStorage.getItem(DOCUMENT_BG_COLOR_KEY);
    document.body.style.backgroundColor = value;
    const matchValues= value.match(COLOR_VALUE_PATTERN);
    matchValues.forEach(function(value,index){
        colorControls[index].value = value;
    })
};

window.onclose = function() {
    localStorage.setItem(DOCUMENT_BG_COLOR_KEY, document.body.style.backgroundColor);
}
*/

//=========================
/*
const user = {
    name: "Test",
    surname: "Testovich",
    email: "test@test.com",
};

localStorage.setItem("user", JSON.stringify(user));

const getUserFromLS = JSON.parse(localStorage.getItem("user"));

console.log(getUserFromLS);

*/

/*const AUTHORIZED_USER = "AUTHORIZED_USER";

const authorizedUser = {
    fullname: "Name Surname",
    email: "test@test.com",
};

let jsonUser = JSON.stringify(authorizedUser);

const mySetItem = function (key, value) {
    localStorage.setItem(key, value);
    alert(localStorage.getItem(AUTHORIZED_USER));
}



window.onload = mySetItem(AUTHORIZED_USER, jsonUser)*/
/*const AUTHORIZED_USER = "AUTHORIZED_USER";

function User(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
}

const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.querySelector('input[name="surname"]');
const emailInput = document.querySelector('input[name="email"]');
const loginButton = document.querySelector('#loginButton');

loginButton.onclick = function(e) {
    const user = new User(nameInput.value, surnameInput.value, emailInput.value);
    sessionStorage.setItem(AUTHORIZED_USER, JSON.stringify(user));
}*/

/*const locationPropsList = document.getElementById('location');

for(let prop in location) {
    console.log(location);
    if(typeof location[prop] === "string") {
        const propItem = document.createElement('li');
        propItem.innerText = `${prop} = "${location[prop]}"`;
        locationPropsList.appendChild(propItem);

    }
}

const reloadButton = document.getElementById('reload');

reloadButton.addEventListener('click', function(){
    location.reload();
})

//======================================

const goToAboutButton = document.getElementById('about');

goToAboutButton.onclick = function () {
    console.log(location);
    location.assign(`${location.origin}/pages/about.html`);
};*/

class PrintMachine {
    /**
     *
     * @param {number} fontSize
     * @param {string} fontColor
     * @param {string} fontFamily
     * @param {string} text
     */
    constructor(fontSize, fontColor, fontFamily, text) {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
        this.text = text;
    }

    print() {
        const parElem = document.createElement('p');
        parElem.innerText = this.text;
        parElem.style.fontSize = `${this.fontSize}px`;
        parElem.style.color = this.fontColor;
        parElem.style.fontFamily = this.fontFamily;

        document.body.append(parElem);


        }
    }



const printMachineObj = new PrintMachine(54, 'green', 'monospace', 'something');
    printMachineObj.print();

class News{
    /**
     *
     * @param {string} title
     * @param {string} text
     * @param {Array<string>} tags
     * @param {Date} data
     */
    constructor(title, text, tags, date){
        this._title = title;
        this._text = text;
        this._tags = tags;
        this._date = date;
}

    /**
     * @return {Node} - lxxdkjf lkdsfl;k gs;lkdf gj
     */
    toHTMLElement() {
        const titleElem = document.createElement("h1");
        titleElem.innerText = this._title;
        const parElem = document.createElement('p');
        parElem.innerText = this._text;
        const tagsText = `#${this._tags.join(" #")}`;
        const tagsElem = document.createElement('p');
        tagsElem.innerText = tagsText;

        const dataElem = document.createElement('p');

        dataElem.innerText = this.getNewsDateString();






        const newsElem = document.createElement("article");
        document.body.append(newsElem);
        newsElem.appendChild(titleElem);
        newsElem.appendChild(dataElem);
        newsElem.appendChild(parElem);
        newsElem.appendChild(tagsElem);



        return newsElem;
    }

    /**
     * @return {string}
     */
    getNewsDateString(){

        const dayDiff = Math.floor( (new Date() - this._date)/(1000*60*60*24) );
        if(dayDiff < 1){
            return "today";
        }
        if(dayDiff < 7){
            return `${dayDiff} days ago`
        }
        return this._date.toLocaleString('en', {year: 'numeric', month: 'long', day: 'numeric'})
    }



}

const news = new News("SOME NEW", "EIUggFKRLEPDKFJEDFPOFDDDDDDDDDDD",["important","test", "match", "!"], new Date('12/7/2019'));
const news2 = new News("SOME NEW", "sffe",["important","test", "match", "!"], new Date('12/7/2019'));
const news3 = new News("SOME NEW", "EIUggFKRLEPdsdeeDKFJEDFPOFDDDDDDDDDDD",["important","test", "match", "!"], new Date('12/7/2019'));
const news4 = new News("SOME NEW", "EIUggFKRfeLEPDKFJEDFPOFDDDDDDDDDDD",["important","test", "match", "!"], new Date('12/7/2019'));
const news5 = new News("SOME NEW", "EIUggFKRLEPDKFJEDFPOFDDDDDDDDDDD",["important","test", "match", "!"], new Date('12/7/2019'));
news.toHTMLElement();

class newsFeed {
    constructor(news){
        this._news = news;
    }

    getNumberOfNews () {
        return this._news.length;
    }

    printAllNews () {
        this._news.forEach(news => news.toHTMLElement());
    }

}

const arrayNews = new newsFeed([news, news2, news3, news4, news5]);
arrayNews.printAllNews();


