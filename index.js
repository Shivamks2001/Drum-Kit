// Javascript for Drum Kit project

let buttonArray = document.querySelectorAll("button");

// Adding Event Listeners to each Button
for(let i = 0;i < buttonArray.length;i++)
{
    buttonArray[i].addEventListener("click",function(){
        // console.log(this) // for eg: <button class="a drum pressed">a</button> (here this is the referce of object which is the html element which gets clicked)
        playSound(this.classList[0]);
        addAnimation(this.classList[0]);
    });
}

// Adding Event Listener to whole document so entire webpage will listen when any keyboard is pressed and when any key is pressed then following callback function will execute
document.addEventListener("keydown",function(Event)
{
    // console.log(Event) generally event here is a parameter in object form which contains details about the event that took play and we can store it as an input in callback's anonymous function
    playSound(Event.key); // .key is the property which store the info about the key which was pressed
    addAnimation(Event.key);
})

function playSound(char)
{
    let audio;
    switch(char)
    {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3"); // behind the scene, new Audio() adds HTML Audio Element which has a bunch of property and methods and along with play() method which plays sound
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case 'j':
            audio = new Audio("sounds/crash.mp3");
            break;
        case 'k':
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case 'l':
            audio = new Audio("sounds/snare.mp3");
            break;
        default:
            console.log(char);
    }
    audio.play();
}

function addAnimation(char)
{
    document.querySelector("." + char).classList.add("pressed");
    setTimeout(function()
    {
        document.querySelector("." + char).classList.remove("pressed");
    },100);// after 100 ms our anonymous func will get executed
}

// Extra:

// JavaScript Objects

// creating object
// let obj = {
//     name : "shivam",
//     age : 21,
//     toWalk : function()
//     {
//         console.log("Walking...")
//     }
// };

// console.log(obj.name);
// console.log(obj.age);
// obj.toWalk();

// // Upper one very hard work to create object 

// // Easy One using constructor function
// function Person(name,age)
// {
//     this.name = name;
//     this.age = age;
//     this.toWalk = function()
//     {
//         console.log("Walking...")
//     }
// }

// let p1 = new Person("Shivam",21);

// console.log(p1.name);
// console.log(p1.age);
// p1.toWalk();
