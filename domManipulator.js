// Making the reset functionality
const resetButton = document.getElementById('reset');
const codeBox = document.getElementById('code-box');


resetButton.addEventListener('click', async () => {
    let sure = confirm("Sure you want to reset?");

    if (sure == true) codeBox.value = "";


})