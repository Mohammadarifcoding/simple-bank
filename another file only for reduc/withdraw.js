document.getElementById('btn-withdraw').addEventListener('click',function(){

   const newWithdrawAmount = getInputValueId('user-withdraw')
   const previousTotal = getElementvalueById('withdraw')
   const newWithdrawtotal = newWithdrawAmount + previousTotal
   setTextElementbyId('withdraw',newWithdrawtotal)

   const previousBalanceTotal = getElementvalueById('balance')
   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
   setTextElementbyId('balance',newBalanceTotal)




})