let qs = (elemento) => {
    return document.querySelector(elemento);
}

window.addEventListener('load', () => {

    let
        $firstName = qs('#firstName'),
        $firstNameErrors = qs('#firstNameErrors'),
        $lastName = qs('#lastName'),
        $lastNameErrors = qs('#lastNameErrors'),
        $rol = qs('#rol'),
        $rolErrors = qs('#rolErrors'),
        //$file = qs('#productPhoto'),
        //$fileErrors = qs('#fileErrors'),
        //$imgPreview = qs('#img-preview'),
        $form = qs('#form'),
        $submitErrors = qs('#submitErrors'),
        regExName = /^[a-zA-Z\sñáéíóúü ]*$/

    $firstName.addEventListener('blur', function () {
        switch (true) {
            case !$firstName.value.trim():
                $firstNameErrors.innerHTML = 'El campo nombre es obligatorio';
                $firstName.classList.add('is-invalid')
                break;
            case !regExName.test($firstName.value):
                $firstNameErrors.innerText = 'Debes ingresar un nombre válido';
                $firstName.classList.add('is-invalid')
                break;
            case $firstName.value.trim().length < 2:
                $firstNameErrors.innerText = 'El campo nombre debe tener al menos 2 caracteres';
                $firstName.classList.add('is-invalid')
                break;
            default:
                $firstName.classList.remove('is-invalid');
                $firstName.classList.add('is-valid');
                $firstNameErrors.innerHTML = ''
                break;
        }
    })

    $lastName.addEventListener('blur', function () {
        switch (true) {
            case !$lastName.value.trim():
                $lastNameErrors.innerHTML = 'El campo apellido es obligatorio';
                $lastName.classList.add('is-invalid')
                break;
            case !regExName.test($lastName.value):
                $lastNameErrors.innerText = 'Debes ingresar un apellido válido';
                $lastName.classList.add('is-invalid')
                break;
            case $lastName.value.trim().length < 2:
                $lastNameErrors.innerText = 'El campo apellido debe tener al menos 2 caracteres';
                $lastName.classList.add('is-invalid')
                break;
            default:
                $lastName.classList.remove('is-invalid');
                $lastName.classList.add('is-valid');
                $lastNameErrors.innerHTML = ''
                break;
        }
    })

    $rol.addEventListener('change', function () {
        switch (true) {
            case !$rol.value.trim():
                $rolErrors.innerHTML = 'El campo rol es obligatorio';
                $rol.classList.add('is-invalid')
                break;
            default:
                $rol.classList.remove('is-invalid');
                $rol.classList.add('is-valid');
                $rolErrors.innerHTML = ''
                break;
        }
    })

    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        const FORM_ELEMENTS = event.target.elements;

        for (let index = 0; index < FORM_ELEMENTS.length - 1; index++) {
            const element = FORM_ELEMENTS[index];
            if(element.value === "" && element.type !== "file") {
                element.classList.add("is-invalid")
            }
            /* element.dispatchEvent(new Event("blur")) */
        }

        let elementosConErrores = document.querySelectorAll(".is-invalid");
        let errores = elementosConErrores.length > 0; 

        if(errores) {
            $submitErrors.innerText = "Hay errores en el formulario"
        } else {
            console.log("Todo bien")
            $form.submit()
        }
     })

     /* $file.addEventListener('change', () => {
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
    }) */

    
})

