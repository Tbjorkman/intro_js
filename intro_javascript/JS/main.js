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
}