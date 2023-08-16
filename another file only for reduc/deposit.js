document.getElementById('btn-deposit').addEventListener('click', function () {
    // 1 get the id
    // 2 get the value
    // 3 convert string value to number
    const newDepositAmount = getInputValueId('user-deposit')
    const previousTotal = getElementvalueById('deposit')

    // calculate new deposit
    const newdeposittotal = previousTotal + newDepositAmount
    
    // set deposit total
    setTextElementbyId('deposit',newdeposittotal)

    const previousBalanceTotal = getElementvalueById('balance')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount

    setTextElementbyId('balance',newBalanceTotal)

})