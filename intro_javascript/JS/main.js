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
* when the box has been clicked 3 times, fade it a little
*
* when the box has been clicked 6 times hide it*/

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