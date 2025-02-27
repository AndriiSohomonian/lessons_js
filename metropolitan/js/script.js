"use strict"

document.addEventListener("DOMContentLoaded", function(){
    console.log("завантажена сторінка")
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    
    async function formSend(e){
        e.preventDefault();
        console.log("працює")
        let error = 0                    /* formValidate(form) виправити;*/
        let formData = new FormData(form);

        if(error === 0){
            form.classList.add('_sending');
            console.log("+");
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok){
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            }else{
                alert('error');
                form.classList.remove('_sending');
            }
        }else{
            console.log("-");
            alert('Please fill in all the required fields');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for(let i=0; i<formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if(input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                    console.log("помилка")
                }
            }else if(input.getAttribute("type")==="checkbox" && input.checked === false){
                formAddError(input);
                error++;
            }else{
                if(input.value === ""){
                    formAddError(input);
                    error++;
                }
            }
            

        }

    }

    function formAddError(input) {
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

});