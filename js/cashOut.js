// console.log('cash out file connected')
document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('cash out button clicked')

        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(cashOut);
        const pinNumber = document.getElementById('input-cash-out-pin').value;
        console.log(cashOut, pinNumber);

        // wrong way to varify pin number 
        if (pinNumber === '1234'){
            // console.log(money is reducing)
            const balance = document.getElementById('account-balance').innerText;
            // console.log(balance)
            const balanceNumber = parseFloat(balance);
            // reduce the balance
            const newBalance = balanceNumber - cashOutNumber;
            // updata the ui
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('Failed to cash out. Plaease try again later.')
        }
    });