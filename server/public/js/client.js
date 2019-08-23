//import { url } from "inspector";

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const indexMessageOne = document.querySelector('#i_msg_1')
const indexMessageTwo = document.querySelector('#i_msg_2')


function randomBackgroundImage(){
    var backgroundImages = [
        "linear-gradient(rgba(255, 255, 255, 0.700), rgba(255, 255, 255, 0.700)), url('../img/bear.gif')",
        "linear-gradient(rgba(255, 255, 255, 0.700), rgba(255, 255, 255, 0.700)), url('../img/bird.gif')",
        "linear-gradient(rgba(255, 255, 255, 0.700), rgba(255, 255, 255, 0.700)), url('../img/oceanAndMountain.gif')",
        "linear-gradient(rgba(255, 255, 255, 0.700), rgba(255, 255, 255, 0.700)), url('../img/panda.gif')",
        "linear-gradient(rgba(255, 255, 255, 0.700), rgba(255, 255, 255, 0.700)), url('../img/rufous.gif')",
        "linear-gradient(rgba(255, 255, 255, 0.700), rgba(255, 255, 255, 0.700)), url('../img/rainforest.gif')",
        "linear-gradient(rgba(255, 255, 255, 0.700), rgba(255, 255, 255, 0.700)), url('../img/underwater.gif')",
        "linear-gradient(rgba(255, 255, 255, 0.700), rgba(255, 255, 255, 0.700)), url('../img/shoebill.gif')",
    ];
    let random = Math.floor(Math.random()*backgroundImages.length);
    document.getElementById("main").style.backgroundImage = backgroundImages[random];
    // document.getElementById("about").style.backgroundImage = backgroundImages[random];
}
window.onload = randomBackgroundImage();


weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    indexMessageOne.textContent = 'Looking at the sky...'
    indexMessageTwo.textContent = null

    const location = search.value

    fetch('/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                indexMessageOne.textContent = data.error
            }
            else{
                indexMessageOne.textContent = data.location
                indexMessageTwo.textContent = data.forecast
            }
        })
    })
})


