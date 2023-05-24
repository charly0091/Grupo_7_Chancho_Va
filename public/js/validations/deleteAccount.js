let qs = (elemento) => {
    return document.querySelector(elemento);
}

window.addEventListener("load", () => {
       let  $inputEmail = qs("#email");
            $emailErrors = qs("#errorEmail"); 
            $inputPassword = qs("#password");
            $passwordErrors = qs("#passError")
            regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;
            regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
            deleteForm = qs("#delete_form");
           
        

        $inputEmail.addEventListener('blur', () => {
            switch (true) {
                case ! $inputEmail.value.trim():
                    $emailErrors.innerText = 'Debe ingresar su email ';
                    $inputEmail.classList.add('is-invalid')
                    break;
                case !regExEmail.test( $inputEmail.value):
                    $emailErrors.innerText = 'Debe ingresar un email válido ';
                    $inputEmail.classList.add('is-invalid')
                    break
                default:
                    $inputEmail.classList.remove('is-invalid');
                    $inputEmail.classList.add('is-valid');
                    $emailErrors.innerText = ''
                    break;
            }
        })

        $inputPassword.addEventListener('blur', () => {
            console.log(blur);
            switch (true) {
                case ! $inputPassword.value.trim():
                    $passwordErrors.innerText = 'Debe ingresar su contraseña';
                    $inputPassword.classList.add('is-invalid')
                    break;
/*                 case !regExPass.test( $inputPassword.value):
                    $passwordErrors.innerText = 'Ingrese nuevamente su contraseña';
                    $inputPassword.classList.add('is-invalid')
                    break */
                default:
                     $inputPassword.classList.remove('is-invalid');
                     $inputPassword.classList.add('is-valid');
                    $passwordErrors.innerText = ''
                    break;
            }
        }) 

        deleteForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const FORM_ELEMENTS = event.target.elements;
    
            for (let index = 0; index < FORM_ELEMENTS.length - 1; index++) {
                const element = FORM_ELEMENTS[index];
                if(element.value === "" ) {
                    element.classList.add("is-invalid")
                }
              
            }
    
            let elementosConErrores = document.querySelectorAll(".is-invalid");
            let errores = elementosConErrores.length > 0; 
    
            if(errores) {
                submitErrors.innerText = "Se ha detectado errores en el ingreso."
            } else {
                 deleteForm.submit()
            }
         })
    
        
    })
