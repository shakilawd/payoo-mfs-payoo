// console.log('button clicking file added')

// document.getElementById('id').addEventListener('click', fun)
// document.getElementById('button-login')
// .addEventListener('click', function(){})

// search: form submit reloading the page
// step - 1 set event handler
document.getElementById('button-login')
    .addEventListener('click', function(event){
    // step -2: prevent default behavior (prevent  reloading browser)
    event.preventDefault();  //<-----vejal to beginners
    console.log('login button clicked');

    // step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})