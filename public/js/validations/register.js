let qs = (elemento) => {
    return document.querySelector(elemento);
}

async function validarEmail(email) {
    try {
      const response = await fetch("/api/users");
      const {users} = await response.json();
      const existeEmail = users.find(user => user.email == email);
      if (existeEmail) {
        console.log(existeEmail);
        return true;
      } else {
        console.log("retorno false");
        return false;
      }
    } catch (error) {
      console.log("Ha habido un error al comprobar el correo electrónico.");
      console.error(error);
      throw error;
    }
  }

  function onSearch(id) {
    fetch("https://rickandmortyapi.com/api/character/" + id)
    .then((response) => response.json())
    .then(( data ) => {
       if (data.id) {
          alert('entro')
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          alert('¡No hay personajes con este ID!');
       }
    })
    .catch((error) => {
         alert('¡Hubo un error!');
         console.error(error);
     }
    );
 }



window.addEventListener('load', () => {
    
let 
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $inputName = qs('#firstName'),
    $nameErrors = qs('#nameErrors'),
    $inputLastname = qs('#lastName'),
    $lastnameErrors = qs('#lastnameErrors'),
    $pass = qs('#password'),
    $passErrors = qs('#passErrors'),
    $pass2 = qs('#password2'),
    $pass2Errors = qs('#pass2Errors'),
    $file = qs('#image'),
    $fileErrors = qs('#fileErrors'),
    $terms = qs('#recordar'),
    $termsErrors = qs('#termsErrors'),
    $form = qs('#form'),
    $submitErrors = qs('#submitErrors'),
    $imgPreview = qs('#img-preview')
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;

    $email.addEventListener('blur', async (e) => {
        try {
          const resultado = await validarEmail($email.value);
      
          switch (true) {
            case !$email.value.trim():
              $emailErrors.innerText = 'El campo email es obligatorio';
              $email.classList.add('is-invalid')
              break;
            case !regExEmail.test($email.value):
              $emailErrors.innerText = 'Debe ingresar un email válido';
              $email.classList.add('is-invalid')
              break
            case resultado:
              $emailErrors.innerText = 'El email ya está registrado';
              $email.classList.add('is-invalid')
              break
            default:
              $email.classList.remove('is-invalid');
              $email.classList.add('is-valid');
              $emailErrors.innerText = ''
              break;
          }
        } catch (error) {
          console.error(error);
        }
      });
      

    $inputName.addEventListener('blur', () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerText = 'El campo nombre es obligatorio';
                $inputName.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerText = 'El campo nombre solo acepta letras';
                $inputName.classList.add('is-invalid')
                break;
            case $inputName.value.trim().length < 2:
                $nameErrors.innerText = 'El campo nombre debe tener al menos 2 caracteres';
                $inputName.classList.add('is-invalid')
                break;
            default:
                $inputName.classList.remove('is-invalid');
                $inputName.classList.add('is-valid');
                $nameErrors.innerText = ''
                break;
        }
    })

    $inputLastname.addEventListener('blur', () => {
        switch (true) {
            case !$inputLastname.value.trim():
                $lastnameErrors.innerText = 'El campo apellido es obligatorio'
                $inputLastname.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputLastname.value):
                $lastnameErrors.innerText = 'Debes ingresar un apellido válido'
                $inputLastname.classList.add('is-invalid')  
                break; 
            default:
                $inputLastname.classList.remove('is-invalid');
                $inputLastname.classList.add('is-valid');
                $lastnameErrors.innerText = ''
                break;
        }
    })

    $pass.addEventListener('blur', () => {
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerText = 'El campo contraseña es obligatorio';
                $pass.classList.add('is-invalid')
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerText = 'La contraseña debe tener entre 8 y 50 caracteres, al menos un dígito, una minúscula y una mayúscula.';
                $pass.classList.add('is-invalid')
                break;
            default:
                $pass.classList.remove('is-invalid');
                $pass.classList.add('is-valid');
                $passErrors.innerText = ''
                break;
        }
    })

     $pass2.addEventListener('blur', () => {
        switch (true) {
            case !$pass2.value.trim():
                $pass2Errors.innerText = 'Debes reingresar la contraseña';
                $pass2.classList.add('is-invalid')
                break;
            case $pass2.value != $pass.value:
                $pass2Errors.innerText = 'Las contraseñas no coinciden';
                $pass2.classList.add('is-invalid')
                break;
            case !regExPass.test($pass2.value):
                $pass2Errors.innerText = 'La contraseña debe tener entre 8 y 50 caracteres, al menos un dígito, una minúscula y una mayúscula.';
                $pass2.classList.add('is-invalid')
                break;
            default:
                $pass2.classList.remove('is-invalid');
                $pass2.classList.add('is-valid');
                $pass2Errors.innerText = ''
                break;
        }
    })

    $file.addEventListener('change', () => {
        let filePath = $file.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $file.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            console.log($file.files);
            if($file.files && $file.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid')
            }
        }
    })

    $terms.addEventListener('click', () => {
        $terms.value = 'on'
        $terms.classList.toggle('is-valid');
        $terms.classList.remove('is-invalid');
        $termsErrors.innerHTML = ""
    })

    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        const FORM_ELEMENTS = event.target.elements;

        if( $pass2.value != $pass.value) {
        
            $pass2Errors.innerText = 'Las contraseñas no coinciden';
            $pass2.classList.add('is-invalid');
        }

        for (let index = 0; index < FORM_ELEMENTS.length - 1; index++) {
            const element = FORM_ELEMENTS[index];
            if(element.value === "" && element.type !== "file") {
                element.classList.add("is-invalid")
            }
            /* element.dispatchEvent(new Event("blur")) */
        }

        if(!$terms.checked){
            $terms.classList.add('is-invalid');
            $termsErrors.innerHTML = "Debes aceptar las bases y condiciones"
        }

        let elementosConErrores = document.querySelectorAll(".is-invalid");
        let errores = elementosConErrores.length > 0; 

        if(errores) {
            $submitErrors.innerText = "Hay errores en el formulario"
        } else {
            $form.submit()
        }
     })





})
