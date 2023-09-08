var lamp = document.getElementById('lamp')
var turnOn = document.getElementById('turnOn')
var turnOff = document.getElementById('turnOff')

function TurnOn() {
    lamp.src = 'img/lampOn.svg'
}

function TurnOff() {
    lamp.src = 'img/lampOff.svg'
}

lamp.addEventListener('click', Broken)
function Broken() {
    lamp.src = 'img/lampBroken.svg'
    turnOn.disabled = true
    turnOff.disabled = true
}