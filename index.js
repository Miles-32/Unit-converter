/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthValue = document.getElementById("length")
const volumeValue = document.getElementById("volume")
const massValue = document.getElementById("mass")
const unitInput = document.getElementById("units")
const button = document.getElementById("convertButton")

function lengthCalculate(units) {
    let feet = (Number(units) * 3.281).toFixed(3)
    let meters = (Number(units) / 3.281).toFixed(3)
    
    lengthValue.innerHTML = `${units} meters = ${feet} feet | ${units} feet = ${meters} meters`
}

function volumeCalculate(units) {
    let gallons = (Number(units) * 0.264).toFixed(3)
    let liters = (Number(units) / 0.264).toFixed(3)
    
    volumeValue.innerHTML = `${units} liters = ${gallons} gallons | ${units} gallons = ${liters} liters`
}

function massCalculate(units) {
    let pounds = (Number(units) * 2.204).toFixed(3)
    let kilos = (Number(units) / 2.204).toFixed(3)
    
    massValue.innerHTML = `${units} kilos = ${pounds} pounds | ${units} pounds = ${kilos} kilos`
}

button.addEventListener("click", function(){
    units = unitInput.value
    lengthCalculate(units)
    volumeCalculate(units)
    massCalculate(units)
})