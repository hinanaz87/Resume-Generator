function addNewWeField(){
    // console.log("add")
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('wefield')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3 )
    newNode.setAttribute('placeholder', "Enter Another Work Experience")

    let weOb=document.getElementById('we')
    let weaddbuttonOb=document.getElementById('weaddbutton');

    weOb.insertBefore(newNode, weaddbuttonOb)
}

function addNewAqField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqfield')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3 )
    newNode.setAttribute('placeholder', "Enter Another Academic Qualification")

    let weOb=document.getElementById('aq')
    let weaddbuttonOb=document.getElementById('adaddbutton');

    weOb.insertBefore(newNode, weaddbuttonOb)
}

function addNewSkillField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('skillsfield')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3 )
    newNode.setAttribute('placeholder', "Enter Your Skills")

    let weOb=document.getElementById('skills')
    let weaddbuttonOb=document.getElementById('skillsaddbutton');

    weOb.insertBefore(newNode, weaddbuttonOb)



}
// GENERATING CV
function generateCV(){
// console.log("add")
let nameField =document.getElementById("namefield").value;
let nameT1=document.getElementById("nameT1").innerHTML= nameField;

document.getElementById("nameT2").innerHTML=nameField;

document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;

document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;

document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;

document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;

document.getElementById("linkedinT").innerHTML=document.getElementById("linkedinfield").value;

document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefield").value;

let wes = document.getElementsByClassName("wefield");
// let wes = document.getElementsByClassName("wefield");
let str = "";

for (let e of wes){
    str = str + `<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML=str;


let aqs=document.getElementsByClassName("aqfield")

let str1 ="";

for (let e of aqs) {
    str1 = str1 + `<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML=str1;


let sk=document.getElementsByClassName("skillsfield")

let str2 ="";

for (let e of sk) {
    str2 = str2 + `<li> ${e.value} </li>`;
}
document.getElementById("skT").innerHTML=str2;

let file = document.getElementById("imagefield").files[0]
console.log(file)

let reader = new FileReader()

reader.readAsDataURL(file);

console.log(reader.result);

// set the image to template
reader.onloadend = function() {
    document.getElementById("imageT").src = reader.result
}

document.getElementById("cv-form").style.display = "none";
document.getElementById("cv-template").style.display = "block";

}

function printCV(){
    window.print()
}
