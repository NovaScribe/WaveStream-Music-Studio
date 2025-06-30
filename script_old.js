
let img = document.querySelectorAll("img:not(.exclude)");
const imgArray = Array.from(img);
let video = document.getElementsByTagName("video");
let aside = document.getElementById("side");
let maside = document.getElementById("mobileaside");
let menu = document.getElementById('menu');
let s = document.querySelector("section").innerHTML;
let footer = document.getElementById('fut');
var divs = document.getElementById('divs');
var cLink;

function pageload() {
    if (window.innerWidth < 520 && window.innerWidth < window.innerHeight) {               // Mobile --------

        imgArray.forEach(el => {
            el.style.width = "100%";
        });
        aside.style.display = "none";
        maside.style.display = "block";

        maside.style.height = "400px";
        if (video[0] != null) {
            video[0].style.width = "100%";
        }
        // menu.style.display = 'inline-block';
    } else {                                    // Desktop --------
        aside.style.display = "table-row";
        maside.style.display = "none";

        if (imgArray.length != 0) {

            imgArray.forEach(el => { el.style.width = "40%"; });
        }


        // setting vertical img size
        imgArray.forEach(elem => {
            if (elem.clientWidth < elem.clientHeight) {
                elem.style.width = "20%";
            }
        });

    }


}

window.onload = pageload();

document.addEventListener("DOMContentLoaded", function () {
    // pageload();
    // Set a delay in milliseconds (e.g., 5000 for 5 seconds)
    var delay = 5000;

    // Get the video element
    var video = document.getElementById("df");

    // Function to start loading the video after the delay
    function loadVideo() {
        if (video != null) {
            video.load();
        }
    }

    // Set a timeout to call the loadVideo function after the specified delay
    setTimeout(loadVideo, delay);
    // alert("Done");
});


/*--------------------Listener---------------*/
screen.orientation.addEventListener("change", function (e) {
    location.reload();
});

window.addEventListener('load', function () {
    setSize();
});
window.addEventListener("resize", function () {
    setSize();
    pageload();
});

/*------------------------------------------------------*/
function setSize() {
    var asideElement = document.querySelector('aside');
    var sectionElement = document.getElementById("cnf");
    asideElement.style.height = sectionElement.offsetHeight + 'px';
}

// Website Details
const { host, hostname, href, origin, pathname, port, protocol, search } = window.location

/*------------------------------------------------------*/

function scrollm(item) {
    var SelectedItem = document.getElementById("mobileaside").querySelectorAll('li');
    SelectedItem.item(0).scrollIntoView({ behavior: 'smooth' });
}

/*--------------Function to add element-------------------------------------*/
function addElementBefore(name, linkpath, before) {

    const listitem = document.createElement("li");  //list item created
    const node = document.createTextNode(name);     //Text created
    listitem.appendChild(node);                     //text added to list item

    // adding Style to new element
    if (window.location.pathname.slice(1).replaceAll("%20", " ") == linkpath) {
        listitem.setAttribute('style', "background:rgba(0, 0, 0, 0.7);border: 1px solid black;");
    }

    const link = document.createElement("a");       // link created
    link.href = linkpath;                           // new item name
    link.appendChild(listitem);                     // li added to a

    //finding before and add element
    let list_from_maside = maside.getElementsByTagName('a');
    let list_from_aside = aside.getElementsByTagName('a');
    for (let index2 = 0; index2 < list_from_maside.length; index2++) {
        let ele = list_from_maside[index2];
        let ele1 = list_from_aside[index2];
        if (ele.firstElementChild.innerHTML == name) {
            break;
        } else {

        }
        // added if not exist
        if (ele.firstElementChild.innerHTML == before) {
            if (before != null) {
                maside.insertBefore(link, ele);
                aside.insertBefore(link.cloneNode(true), ele1);
            } else {
                maside.appendChild(link);
                aside.appendChild(link.cloneNode(true));
            }
            break;
        }
    }

};

/*--------------------------------------------------------------------------*/
// Add Element at the End of list
function addElementAtEnd(name, linkpath) {
    const listitem = document.createElement("li");  //list item created
    const node = document.createTextNode(name);     //Text created
    listitem.appendChild(node);                     //text added to list item

    if (window.location.pathname.slice(1) == linkpath) {
        listitem.setAttribute('style', "background:rgba(0, 0, 0, 0.7);border: 1px solid black;");
    }

    const link = document.createElement("a");       // link created
    link.href = linkpath;                           // new item name
    link.appendChild(listitem);

    //find existance
    let array = aside.querySelectorAll('a');
    let innerText = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        innerText[index] = element.firstElementChild.innerHTML;
    }

    //adding if not exist
    if (innerText.includes(name)) {
        //Noting TODO
    } else {
        aside.appendChild(link);
        maside.appendChild(link.cloneNode(true));
    }
}
/*----------------------------------------------------------------------------*/

// Add Heading Element in aside & mobileaside
function addListHeading(name) {
    const list = document.createElement('li');
    const h3 = document.createElement('h3');
    h3.innerText = name;
    list.appendChild(h3);

    maside.appendChild(list);
    aside.appendChild(list.cloneNode(true));
}
/*************************************************************************/

function addHeadingBeforeHeading(name, before) {
    const list = document.createElement('li');
    const h3 = document.createElement('h3');
    h3.innerText = name;
    list.appendChild(h3);
    let list_from_aside = aside.querySelectorAll('li');
    let list_from_maside = maside.querySelectorAll('li');
    for (let index2 = 0; index2 < list_from_aside.length; index2++) {
        let ele = list_from_aside[index2];
        let ele1 = list_from_maside[index2];
        if (ele.querySelector('h3') != null && ele.querySelector('h3').innerHTML == before) {
            if (before != null) {
                maside.insertBefore(list, ele1);
                aside.insertBefore(list.cloneNode(true), ele);
            } else {
                //todo
            }
            break;
        }
    }
};
/************************************************************* */

function addElementAtRelated(name, linkpath) {
    const listitem = document.createElement("li");  //list item created
    const node = document.createTextNode(name);     //Text created
    listitem.appendChild(node);                     //text added to list item

    const link = document.createElement("a");       // link created
    link.href = linkpath;                           // new item name
    link.appendChild(listitem);

    rightAside.appendChild(link);
}
/*-------------------------------------------------------------*/

//added sketching
addElementBefore('Sketching', 'how to sketch in solidworks.html', 'Extrude');
//added Envelope
addElementBefore('Envelope', "what-is-envelope-solidworks.html", 'Replace Components&nbsp;');
// added Virtual component
addElementAtEnd("Virtual Component", "what-is-virtual-component-in-solidworks.html");
// added Sheet metal
addListHeading('Sheet Metal');
//Added Base flange
addElementAtEnd('Base Flange', 'base-flange-sheet-metal-solidworks.html');
addElementAtEnd('Edge Flange', 'edge-flange-sheet-metal-solidworks.html');
addElementAtEnd('Hem', 'hem-sheet-metal-solidworks-tutorial.html');
addElementAtEnd('Jog', 'jog-sheet-metal-solidworks-tutorial.html');
addElementAtEnd('Sketched Bend', 'how-to-bend-sheet-in-solidworks-tutorial.html');
addElementAtEnd('Convert To Sheet', 'how-to-convert-to-sheet-metal-in-solidworks.html');
addElementAtEnd('Swept Flange', 'swept-flange-in-solidworks-tutorial.html');
// addElementAtEnd('Corners','corners-chamfer-flange-sheet-metal-solidworks.html');
addElementAtEnd('Unfold', 'how-to-unfold-sheet-metal-in-solidworks.html');
// addElementAtEnd('Fold','fold-sheet-metal-solidworks.html');

//added advance
addListHeading('Advance Tools & Settings');
//add improve performance
addElementAtEnd("Improve Preformance", "how-to-improve-solidworks-performance.html");
//added Macro
addElementAtEnd("Macro", "how-to-create-macro-in-solidworks.html");
addElementAtEnd("Downloads", "downloads.html");

//add float fix constrain
addElementBefore('Float / Fix / Constrain', "float-fix-mates.html", 'Envelope');
//add Display State
addElementBefore('Display State', "what-is-display-state-in-solidworks.html", 'Envelope');
//added plane axis
addElementBefore('Plane / Axis', "how-to-create-a-plane-and-axis-in-solidworks.html", 'Mirror');

/*---------------------------------------------------------------------------------*/

/*-------Privacy-Policy-----*/
const pp = document.createElement('li');
const link = document.createElement('a');
link.href = "Privacy-Policy.html";
link.innerHTML = 'Privacy Policy';
pp.appendChild(link);
footer.querySelector('div').appendChild(pp);
/*--------------------------*/



const overlay = document.createElement("div");
overlay.className = "overlay";
overlay.id = "overlay";

// Insert the overlay before the "divs" element
if (divs != null) {
    divs.parentNode.insertBefore(overlay, divs);
}

function adblock_in_section() { //used to add ads block in the section
    const divAd = document.createElement('div');
    divAd.setAttribute('id', 'section_adBlock');
    document.querySelector("section").appendChild(divAd);
}
function performSearch() {
    var searchQuery = document.getElementById('searchQuery').value;
    var website = "site:solidworkstutorial.com";
    var searchURL = "https://www.google.com/search?q=" + encodeURIComponent(website + " " + searchQuery);
    window.open(searchURL, '_blank');
}

function toggleMobileMenu() {
    var mobileOptions = document.querySelector('.mobile-options');
    mobileOptions.style.display = (mobileOptions.style.display === 'flex') ? 'none' : 'flex';
}

function popupGenerate() {
    // Check if the popup window is already open
    if (document.getElementById("popupwindow") == null) {
        // Display the overlay
        document.getElementById("overlay").style.display = "block";

        // Create the popup window
        const popupwindow = document.createElement("div");
        popupwindow.id = "popupwindow";

        // Create the form
        const form = document.createElement("form");
        form.id = "emailForm";
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            sentData();
        });

        // Create and configure the label for the email input
        const label = document.createElement('p');
        label.innerText = "Get latest update from us";

        // Create and configure the email input field
        const textbox_email = document.createElement("input");
        textbox_email.type = "email";
        textbox_email.required = true;
        textbox_email.id = "textbox_email";
        textbox_email.placeholder = "Enter your email";

        // Create and configure the submit button
        const submitbtn = document.createElement("button");
        submitbtn.type = "submit";
        submitbtn.id = "submitbtn";
        submitbtn.innerText = "Submit";

        // Append form elements to the form
        form.appendChild(label);
        form.appendChild(textbox_email);
        form.appendChild(submitbtn);

        //create close button
        const closebtn = document.createElement("button");
        closebtn.innerText = "X";
        closebtn.id = "closebtn";
        closebtn.addEventListener("click", function (event) {
            document.getElementById('popupwindow').style.display = 'none'; // show popup
            window.location.href = cLink;
        });

        // Append the form to the popup window
        popupwindow.appendChild(closebtn);
        popupwindow.appendChild(form);

        // Append the popup window to the document body
        document.body.appendChild(popupwindow);
    }
}

if (divs != null) {
    const btn1 = divs.querySelectorAll('a')[0];
    const btn2 = divs.querySelectorAll('a')[1];

    if (btn2 != null) {
        btn1.addEventListener("click", function (event) {
            if (getCookies("email-status")) {

            } else {
                event.preventDefault();
                popupGenerate();
                document.getElementById('popupwindow').style.display = 'block'; // show popup
                cLink = this.href;  // going to selected link
            }
        });
    }

    if (btn2 != null) {
        btn2.addEventListener("click", function (event) {
            if (getCookies("email-status")) {

            } else {
                event.preventDefault();
                popupGenerate();
                document.getElementById('popupwindow').style.display = 'block'; // show popup
                cLink = this.href; // going to selected link
            }

        });
    }


}

getUserData();

function sentData() {
    var email = document.getElementById("textbox_email").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "database.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle response from server if needed
            setCookies('email-status', true, 14);
            window.location.href = cLink;
        }
    };
    xhr.send(JSON.stringify({ email: email }));
}

function setCookies(id, value, ex) {
    const date = new Date();
    date.setTime(date.getTime() + (ex * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${id}=${value}; expires=${expires}; path=/`;
}

function getCookies(id) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split(';');
    for (let i = 0; i < cArray.length; i++) {
        const cookie = cArray[i].trim();
        if (cookie.indexOf(id) === 0) {
            return true; // Found the cookie
        }
    }
    return false; // Cookie not found
}

function getUserData() {
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    // Send data to PHP script using AJAX
    var xhr = new XMLHttpRequest();
    var url = "store_data.php";
    var params = "width=" + screenWidth + "&height=" + screenHeight;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
}

aside.addEventListener('click', function (event) {
    if (!getCookies("email-status")) {
        event.preventDefault();
    if (event.target.parentNode.href != null) {
        popupGenerate();
        document.getElementById('popupwindow').style.display = 'block'; // show popup
        cLink = event.target.parentNode.href; // going to selected link
    }
}
});

