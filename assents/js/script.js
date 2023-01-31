let labelEmail = document.getElementById('labelEmail')
let labelUser = document.getElementById('labelUser')
let labelPassword = document.getElementById('labelPassword')
let inputs = document.getElementsByClassName('input')
let button = document.getElementById('buttoon')

function state1(obj) {
    obj.style.transform = "translateY(2rem)"
    obj.style.color = "var(--color5)"
}

function state2(obj) {
    obj.style.transform = "translateY(0)"
    obj.style.color = "var(--color4)"
}

if (email.value!= ''){
    state2(labelEmail)
}

if (email.value!= ''){
    state2(labelEmail)
}

if (password.value!= ''){
    state2(labelPassword)
}

function stateButton1(obj){
    obj.style.boxShadow = "0 0 1rem 0.5rem var(--color4)"
}

function stateButton2(obj){
    obj.style.boxShadow = "none"
}


for (let i of inputs){
    i.addEventListener('click', (event)=>{
        if(event.target.id == 'email'){
            state2(labelEmail);
        }else{
            state2(labelPassword);
        }
    });

    i.addEventListener('focusin', (event)=>{
        if(event.target.id == 'email'){
            state2(labelEmail)
        }else{
            state2(labelPassword)
        }
    })

    i.addEventListener('focusout', (event) =>{
        if(event.target.id == 'email'){
            if(email.value == ''){
                state1(labelEmail)
            }else{
                stare2(lavelEmail)
            }
        }else{
            if(password.value == ''){
                state1(labelPassword)
            }else{
                stare2(lavePassword)
            }
        }
    })
}

button.addEventListener('focusin', (event) => {
    stateButton1(event.target.parentNode)
})

button.addEventListener('focusin', (event) => {
    stateButton2(event.target.parentNode)
})