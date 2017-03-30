/**
 * Created by user on 21/03/17.
 */
/******************** will be using this for the speach function ************************/

let videoGrass = document.querySelector('#grass');

let buttonPlayVideo = document.querySelector('#video_play_pause');

let background = document.querySelector('#background');

buttonPlayVideo.addEventListener('click', playVideo);

videoGrass.addEventListener('ended', scrollDown);

videoGrass.volume = 0.5;

function playVideo()
{
    if(videoGrass.paused)
    {
        videoGrass.play();
    }
    else
    {
        videoGrass.pause();
        document.getElementById('background').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function scrollDown()
{
    console.log('sound of nature');
    document.getElementById('background').scrollIntoView({
        behavior: 'smooth'
    });

}

let ant = document.querySelector('#ant');

let walk = document.querySelector('.walk');

/************* button for move in my case I had the ant move down **************/

let buttonMove = document.querySelector('#move');

buttonMove.addEventListener('click', antMoves);

function antMoves()
{
    console.log('ant moves');
    ant.classList.toggle('move');
}

/************* button for move to 30 **************/

let buttonToThirty = document.querySelector('#moveTo30');

buttonToThirty.addEventListener('click', movesToThirty);

function movesToThirty()
{
    console.log('ant moves to 30 percent');
    ant.classList.add('moveTo30');
}

/************** button for mirror ****************/

let buttonMirror= document.querySelector('#mirror');

buttonMirror.addEventListener('click', mirrors);

function mirrors()
{
    ant.className = '';
    console.log('ant mirroring');
    ant.classList.add('mirror');
}

/************* button for move from 30 **************/

let buttonFromThirty = document.querySelector('#moveFrom30');

buttonFromThirty.addEventListener('click', movesFromThirty);

function movesFromThirty()
{
    ant.className = '';
    console.log('ant moves from 30 percent');
    ant.classList.add('moveFrom30');
}

/************* button for one jump **************/

let buttonJump = document.querySelector('#oneJump');

buttonJump.addEventListener('click', jump);

function jump()
{
    ant.className = '';
    console.log('ant jumps once');
    ant.classList.toggle('oneJump');
}

/************* button for jumping **************/

let buttonJumping = document.querySelector('#jumping');

buttonJumping.addEventListener('click', jumping);

function jumping()
{
    console.log('ant jumps multiple');
    ant.classList.toggle('jumpingMulti');
}

/************* button for fade **************/

let buttonfade = document.querySelector('#fade');

buttonfade.addEventListener('click', fadingOut);

function fadingOut()
{
    console.log('fading out');
    ant.classList.toggle('fadeout');
}

/************** button for glow ****************/

let buttonGlow = document.querySelector('#glow');

buttonGlow.addEventListener('click', glowing);

function glowing()
{
    console.log('glowing ant');
    ant.classList.toggle('glow');
}

/************** button for falling ****************/

let buttonFallDown = document.querySelector('#fallDown');

buttonFallDown.addEventListener('click', fallingDown);

function fallingDown()
{
    console.log('ant falling to the side');
    ant.classList.toggle('fallDown');
}

/******************** will be using this for the speech function ************************/

let soundNature = document.querySelector('#nature');

let buttonPlay = document.querySelector('#play');

buttonPlay.addEventListener('click', playSound);

soundNature.addEventListener('ended', notice);

soundNature.volume = 0.5;

function playSound()
{
    if(soundNature.paused)
    {
        soundNature.play();
    }
    else
    {
        soundNature.pause();
    }
}

function notice()
{
    console.log('sound of nature');
}
/************** button for shake ****************/

let buttonShake = document.querySelector('#shake');

buttonShake.addEventListener('click', shaking);

function shaking()
{
    console.log('ant shaking');
    ant.classList.toggle('shake');
}

/************** button for moveTo0 ****************/

let buttonmoveTo0= document.querySelector('#moveTo0');

buttonmoveTo0.addEventListener('click', moveToZero);

function moveToZero()
{
    console.log('ant mirroring');
    ant.classList.toggle('moveTo0');
}

/************** button for funExtraFlip ****************/

let buttonfunExtraFlip= document.querySelector('#funExtraFlip');

buttonfunExtraFlip.addEventListener('click', funExtraFlip);

function funExtraFlip()
{
    console.log('ant flip');
    ant.classList.toggle('funExtraFlip');
}

/********************* function test **************************

function life(job, kids, address, spouse) {
    console.log('My job is , ' + job + 'I have ' + kids + ' kids. I live at ' + address + '. I am married to ' + spouse)

}
life('Graphic Designer', 3, '3 Bluemoon st., 6453 city', 'John');*/
