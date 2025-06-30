
var addnewbtndiv = document.getElementById("addnewbtndiv");
var intence = 0;
var units = document.querySelector('#units');

// document.getElementById('width').disabled = 'true'; //disable width input initial
addnewline();

//will add an new Line
function addnewline() {

    var div = document.createElement("div");
    div.classList.add("subcontainer");
    div.id = "default" + intence;

    var select = document.createElement("select");
    select.id = "select" + intence;

    var circle = document.createElement("option");
    circle.value = "circle";
    circle.innerText = "Circle";

    var rectangle = document.createElement("option");
    rectangle.value = "rectangle";
    rectangle.innerText = "rectangle";

    var triangle = document.createElement("option");
    triangle.value = "triangle";
    triangle.innerText = "Triangle";

    var oblong = document.createElement("option");
    oblong.value = "oblong";
    oblong.innerText = "Oblong";

    var bylength = document.createElement("option");
    bylength.value = "bylength";
    bylength.innerText = "By-Length";

    var dia = document.createElement("input");
    dia.id = "dia_or_length" + intence;
    dia.type = "number";
    dia.placeholder = "Ø / Length";
    dia.min = 0;

    var width = document.createElement("input");
    width.type = "number";
    width.id = "width" + intence;
    width.placeholder = "Width";
    width.disabled = 'true';
    width.min = 0;

    var cinput = document.createElement("input");
    cinput.type = "number";
    cinput.id = "cinput" + intence;
    cinput.disabled = 'true';
    cinput.min = 0;

    var qty = document.createElement("input");
    qty.id = "qty" + intence;
    qty.type = "number";
    qty.placeholder = "Qty";
    qty.value = "1";
    qty.min = 1;
    qty.classList.add('qty');

    var span = document.createElement("span");
    span.innerText = "=";
    span.style.style = "font-size: medium;"

    var result = document.createElement("label");
    result.id = "result" + intence;

    var unit = document.createElement('label');
    unit.id = "unit" + intence;
    unit.innerText = "mm";
    unit.classList.add("resultUnit");

    // var section = document.getElementById("maincontainer");
    select.appendChild(circle);
    select.appendChild(rectangle);
    select.appendChild(triangle);
    // select.appendChild(oblong);
    // select.appendChild(bylength);
    div.appendChild(select);
    div.appendChild(dia);
    div.appendChild(width);
    div.appendChild(cinput);
    div.appendChild(qty);
    div.appendChild(span);
    div.appendChild(result);
    div.appendChild(unit);

    addnewbtndiv.parentNode.insertBefore(div, addnewbtndiv);
    // section.appendChild(div);

    intence = intence + 1;
    // console.log(intence);

}

//Remove Button , will remove last line
function deletelastrow() {
    var maincontainer = document.getElementById("maincontainer");
    var elemntCount = maincontainer.childElementCount - 1;
    var elementtoremove = maincontainer.childNodes;
    elementtoremove.item(elemntCount).remove();
}

function reset() {
    var subcontainer = document.querySelectorAll('.subcontainer');
    var x = Number(0);
    // 
    subcontainer.forEach(element => {

        if (x == 0 || x + 1 == subcontainer.length) {
            // do nothing
        } else {
            element.remove();

        }
        x++
    });

    clearDefault();
}

document.getElementById('maincontainer').addEventListener('input', function (event) {

    var targetParent = event.target.parentNode;

    var dia = targetParent.getElementsByTagName('input').item(0);
    var width = targetParent.getElementsByTagName('input').item(1);
    // var height = targetParent.getElementsByTagName('input').item(2);
    var qty = targetParent.getElementsByTagName('input').item(3);
    var cinput = targetParent.getElementsByTagName('input').item(2);
    var result = targetParent.getElementsByTagName('label').item(0);
    // console.log(cinput);
    var diaValue = Number(dia.value);
    var qtyValue = Number(qty.value);

    //clear result
    result.value = "";

    switch (targetParent.getElementsByTagName('SELECT').item(0).value) {
        case "circle":
            width.value = "";
            cinput.value = "";
            width.disabled = true;
            cinputdisabled = true;
            switch (document.getElementById('calculate').value) {
                case "circumference":
                    result.innerText = Number(2 * 3.14 * (diaValue / 2) * qtyValue).toFixed(2);
                    break;
                case "area":
                    result.innerText = Number((3.14 * (diaValue * diaValue)) * qtyValue).toFixed(2);
                    break;
                default:
                    break;
            }

            break;
        case "rectangle":
            width.disabled = false;
            cinput.value = "";
            cinput.disabled = true;

            switch (document.getElementById('calculate').value) {
                case "circumference":
                    result.innerText = Number(2 * Number(dia.value) + 2 * Number(width.value)).toFixed(2);
                    break;
                case "area":
                    result.innerText = Number(Number(dia.value) * Number(width.value)).toFixed(2);
                    break;
                default:
                    break;
            }
            break;
        case "triangle":

            switch (document.getElementById('calculate').value) {
                case "circumference":
                    cinput.disabled = false;
                    width.disabled = false;
                    result.innerText = Number(Number(dia.value) + Number(width.value) + Number(cinput.value)).toFixed(2);
                    break;
                case "area":
                    width.disabled = false;
                    cinput.disabled = true;
                    result.innerText = Number(0.5 * Number(dia.value) * Number(width.value)).toFixed(2);
                    break;
                default:
                    break;
            }
            break;
        default:
            console.log("error on : " + targetParent.getElementsByTagName('SELECT').item(0).value);
            break;
    }


});

//unit change
document.getElementById('units').addEventListener('input', function (event) {
    var resultUnit = document.querySelectorAll('.resultUnit');
    resultUnit.forEach(element => element.innerText = units.value);

})

//listener for calculate
document.getElementById('calculate').addEventListener('input', function (event) {
    reset();
    if (document.getElementById('calculate').value == "circumference") {
        var resultUnit = document.querySelectorAll('.resultUnit');
        resultUnit.forEach(element => element.innerText = units.value);
    } else {
        var resultUnit = document.querySelectorAll('.resultUnit');
        resultUnit.forEach(element => element.innerHTML = units.value + "<sup>2</sup>");
    }
})

function clearDefault() {
    document.querySelector('#dia_or_length0').value = "";
    document.querySelector('#width0').value = "";
    document.querySelector("#cinput0").value = "";
    document.querySelector("#result0").innerText = "";
}




// Set the position of the target element relative to the reference element
document.getElementById('totaldiv').style.left = document.getElementById('result0').offsetLeft - 60 + document.getElementById('result0').offsetWidth + 'px';


// Calculate total
console.log(document.getElementById("maincontainer"));
