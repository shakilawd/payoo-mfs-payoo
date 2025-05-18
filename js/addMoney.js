document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('added the event handler');

        // get money and the pin number
        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('input-pin-number').value;

        // console.log(addMoney, pinNumber)
        if(pinNumber === '1234'){
            // add money to the account
            const balance = document.getElementById('account-balance').innerText;
            // console.log(balance)
            const balanceNumber = parseFloat(balance);
            // new balance
            const newBalance = balanceNumber + addMoneyNumber;
            // update the DOM wit updated balance
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Failded to add money.Please try again later.')
        }
    })