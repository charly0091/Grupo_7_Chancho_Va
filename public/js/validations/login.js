/*async function iniciarSesion() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch(`/api/users/${email}`);
      const userData = await response.json();
  
      if (userData && userData.password === password) {
        // La contraseña es correcta, continuar con el inicio de sesión
        console.log("Inicio de sesión exitoso");
      } else {
        // La contraseña no coincide, mostrar un mensaje de error
        console.log("Contraseña incorrecta");
      }
    } catch (error) {
      // Hubo un error al buscar al usuario en la base de datos
      console.error(error);
      console.log("Ocurrió un error al iniciar sesión");
    }
  }
*/
  
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
            loginForm = qs("#login_form");
           
        

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
                case !regExPass.test( $inputPassword.value):
                    $passwordErrors.innerText = 'Ingrese nuevamente su contraseña';
                    $inputPassword.classList.add('is-invalid')
                    break
                default:
                     $inputPassword.classList.remove('is-invalid');
                     $inputPassword.classList.add('is-valid');
                    $passwordErrors.innerText = ''
                    break;
            }
        }) 

        loginForm.addEventListener("submit", (event) => {
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
                 loginForm.submit()
            }
         })
    
        
    })
