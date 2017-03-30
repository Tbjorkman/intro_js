/**
 when header is clicked, add a class
 */

/*
let myHeader = document.querySelector("#header");

myHeader.addEventListener('click', doSomething);

function doSomething()
{
    //myHeader.classList.add('awesome');
    //myHeader.classList.remove('awesome');
    myHeader.classList.toggle('awesome');
}

let anim = document.querySelector("#anim");
anim.addEventListener('click', startAnimation);

function startAnimation()
{
    anim.classList.add('enable');
}*/

/*
let batman = document.querySelector('#batman');
let captain = document.querySelector('#captain');

console.log("ready to rumble");

batman.addEventListener('click', punch);

function punch()
{
    console.log('punch');
    batman.classList.add('.headbutt');
    batman.addEventListener('animationend', throwCaptainAmericaBack);
}

function throwCaptainAmericaBack()
{
    console.log('throw cap');
    captain.classList.add('CaptainHasBeenHit');
}*/

/*How to use setAttribute setInterval and loop through them*/

/*let body = document.querySelector('body');
my.addEventListener('click', bodyClick);

function bodyClick()
{
    console.log('can not click on body');
}*/

let paths = document.querySelectorAll('#Layer_1 path, line');
// console.log(paths)
paths.forEach(handleOnePath);

function handleOnePath(elem, index)
{
    elem.setAttribute('pathLength', 1);

    setTimeout(drawPath, index * 500);

    function drawPath()
    {
        elem.classList.add('draw');
        console.log(elem);
    }
}

//myRandom will contain a number between 0 and 1
let myRandom = Math.random();

myRandom = Math.random() * 11;

//let's make it between 0 and 10
//let mynum = Math.floor(myRandom);
//let mynum = Math.ceil(myRandom);
//let mynum = Math.round(myRandom);


//adding style/animations via javascript

let header = document.querySelector('h1');

setInterval(move, 200); // 1000 / 200

function move()
{
    let newPosX = Math.floor(
        Math.random()*80
    );

    let newPosY = Math.floor(
        Math.random()*80
    );

    header.style.transform = "translate ("+newPosX +" vw, "+newPosY+" vh,)";
}

//more events

/*window.addEventListener("load", pageReady);

function pageReady()
{
    console.log("all css, js, images etc have been loaded");
}*/

// key events

let pagetitle = document.querySelector('h2');
let box = document.querySelector('#box');

window.addEventListener('keyup', fingerUp);

function fingerUp(MyInfoObject)
{
    console.log(MyInfoObject.key);
    //pagetitle.innerHTML += MyInfoObject.key;
    if (MyInfoObject.key == "ArrowRight")
    {
        box.style.transform = "translateX(80vw)";
    }
    if (MyInfoObject.key == "ArrowLeft")
    {
        box.style.transform = "translateY(80vw)";
    }
    if (MyInfoObject.key == "ArrowDown")
    {
        box.style.transform = "translateX(80vw)";
    }
    if (MyInfoObject.key == "ArrowUp")
    {
        box.style.transform = "translateY(80vw)";
    }
}



/*how to change the image dynamically */
/*let image = document.querySelector('img');

let images = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png"];

let counter = 0;



let id = setInterval(swapImage, 1000);

/!*setTimeout(swapImage, 3000); Delays the showing of an image *!/

function swapImage()
{
    counter++;
    console.log(images[counter]);
    image.setAttribute('src', images[counter]);

    if(counter === images.length-1)
    {
        /!*clearInterval(id);*!/
        counter = -1;
    }
}*/


let cb = document.querySelector('#rainbowbox');

/*
* for each time the box is clicked switch the colors to go through the rainbow*/

let numberOfClicks = 0;

cb.addEventListener('click', boxClicked);

function boxClicked() {
    //numberOfClicks = numberOfClicks +1;
    numberOfClicks++;
    console.log('red', + numberOfClicks);

    if(numberOfClicks === 1)
    {
        console.log('red');
        cb.className = '';
        cb.classList.add('bg_red');
    }
    else if (numberOfClicks === 2)
    {
        console.log('orange');
        cb.className = '';
        cb.classList.add('bg_orange');
    }
    else if (numberOfClicks === 3)
    {
        console.log('yellow');
        cb.className = '';
        cb.classList.add('bg_yellow');
    }
    else if (numberOfClicks === 4)
    {
        console.log('green');
        cb.className = '';
        cb.classList.add('bg_green');
    }
    else if (numberOfClicks === 5)
    {
        console.log('blue');
        cb.className = '';
        cb.classList.add('bg_blue');
    }
    else if (numberOfClicks === 6)
    {
        console.log('indigo');
        cb.className = '';
        cb.classList.add('bg_indigo');
    }
    else if (numberOfClicks === 7)
    {
        console.log('violet');
        cb.className = '';
        cb.classList.add('bg_violet');
        numberOfClicks = 0;
    }
}
/*let friends = ['Jonas', 'Peter', 'Louise', 'Gullan'];

console.log([0]);

console.log(friends.length);

let teachers = ['Jonas', 'Julio', 'Peter', 'Kenny', 'Gullan', 'Allan'];

friends.forEach(logMyFriends);

function logMyFriends(item, index)
{
    console.log('at index ' + ' we have ' + item);
}*/

let hobbies = ['crochet', 'sewing', 'jewelry making', 'baking', 'cooking'];

hobbies.forEach(logMyHobbies);

function logMyHobbies(hobbies, number)
{
    console.log('list my ' + hobbies + ' ' + number);
}


let paragraph = document.querySelectorAll('p');


paragraph.forEach(loop);

function loop(p)
{
    p.addEventListener('click', pClicked)
}

function pClicked()
{
    console.log(this);
    this.classList.toggle('hide');
}

/* afordance = is giving the user a hint of what is possible */

let li = document.querySelectorAll('li');
let shoppingList = document.querySelector('#toDoList');
let input = document.querySelector('input');
let btn = document.querySelector('button');

btn.addEventListener('click', addItem);


function addItem()
{
       let newShoppingList = document.createElement('li');
       newShoppingList.addEventListener('click', crossedOut);
       newShoppingList.innerHTML=input.value;
       shoppingList.appendChild(newShoppingList);
}

li.forEach(function (item) {item.addEventListener('click', crossedOut);  });

function crossedOut()
{
    console.log(this);
    this.classList.toggle('crossout');
}


let headline = document.querySelector('h1');
let roses = document.querySelectorAll('img');
let sneeze = document.querySelector('#achoo');
let roseClicks = 0;

roses.forEach(listenEventImg);

function listenEventImg(rose)
{
    rose.addEventListener('click', roseFade);
}

function roseFade()
{
    this.classList.add('fade');
    roseClicks++;

    if(roseClicks === 3)
    {
        sneeze.volume=.5;
        sneeze.play();
        headline.innerHTML="Flowers Picked 3"
    }
    else if(roseClicks === 6)
    {
        sneeze.volume=.5;
        sneeze.play();
        headline.innerHTML="Flowers Picked 6 ";
    }
    else if(roseClicks === 9)
    {
        sneeze.volume=.5;
        sneeze.play();
        headline.innerHTML="Flowers Picked 9 ";
    }
}