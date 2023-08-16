function getInputValueId(inputId){
    const inputField = document.getElementById(inputId)
    const inputFieldString = inputField.value
    const inputFieldNumber = parseFloat(inputFieldString)
    inputField.value = ''
    return inputFieldNumber
}

function getElementvalueById(elementId){
    const element = document.getElementById(elementId)
    const elementString = element.innerText
    const elementNumber = parseFloat(elementString)
    return elementNumber
}
function setTextElementbyId(element,newvalue){
    const textElement = document.getElementById(element)
    textElement.innerText = newvalue
}

