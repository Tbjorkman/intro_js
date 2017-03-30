/**
 * Created by user on 27/03/1**/
let titleDiv = document.querySelector('#titleDiv');
let beginBtn = document.querySelector('#begin_btn');
let beginScene = document.querySelector('#mainScene');
let crow = document.querySelector('#crow');
let cheese_sm = document.querySelector('#cheese_sm');
let fox = document.querySelector('#fox');
let introMusic = document.querySelector('#intro');


let characters = document.querySelectorAll('.charFadeIn');
Array.from(characters);

//Introduction

window.onload = function () {
    introMusic.volume=.5;
    introMusic.play();
};

beginBtn.addEventListener('click', function () {
    titlePageFadeOut();
    sceneFadeIn();
    introMusic.volume=.2;
});

function titlePageFadeOut()
{
    console.log('title page should fade out');
    titleDiv.classList.add('titleFadeOut');
}

// Scene 0

function sceneFadeIn()
{
    console.log('sceen fades in');
    beginScene.classList.add('sceneFadeIn');
}

characters.forEach(charactersFadingIn);

function charactersFadingIn(characters, index)
{
     console.log('characters should fade in slower');
     characters.classList.add('FadeIn');
}

// First Scene

function foxFirstScene()
{
    console.log('fox enters');
    fox.classList.add('foxEnters', 'pulsing');
}

foxFirstScene();

function foxWaits()
{
    console.log('fox waits for click');
    fox.classList.remove('foxEnters', 'pulsing');
}

// Second Scene

fox.addEventListener('click', foxMovesForward);

function foxMovesForward()
{
    console.log('fox moves forward');
    fox.classList.add('walks');
}




