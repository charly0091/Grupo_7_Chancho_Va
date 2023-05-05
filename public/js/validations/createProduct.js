let qs = (elemento) => {
    return document.querySelector(elemento);
}

window.addEventListener('load', () => {

    let
        $Name = qs('#name'),
        $NameErrors = qs('#nameErrors'),
        $Category = qs('#category'),
        $CategoryErrors = qs('#categoryErrors'),
        $SubCategory = qs('#subCategory'),
        $SubCategoryErrors = qs('#subCategoryErrors'),
        $price = qs('#price'),
        $priceErrors = qs('#priceErrors'),
        $discount = qs('#discount'),
        $discountErrors = qs('#discountErrors'),
        $file = qs('#image'),
        $fileErrors = qs('#imageErrors'),
        $description = qs('#description'),
        $descriptionErrors = qs('#descriptionErrors'),
        $form = qs('#form'),
        regExNumber = /^[0-9]*$/,
        regExFloat = /^[0-9]*[.,]?[0-9]*$/,
        regExDescription = /^.{20,}$/

    $Name.addEventListener('blur', function () {
        switch (true) {
            case !$Name.value.trim():
                $NameErrors.innerHTML = 'El campo nombre es obligatorio';
                $Name.classList.add('is-invalid')
                break;
            case $inputName.value.trim().length < 2:
                $nameErrors.innerText = 'El campo nombre debe tener al menos 2 caracteres';
                $inputName.classList.add('is-invalid')
                break;
            default:
                $Name.classList.remove('is-invalid');
                $Name.classList.add('is-valid');
                $NameErrors.innerHTML = ''
                break;
        }
    })

    $Category.addEventListener('change', function () {
        switch (true) {
            case !$Category.value.trim():
                $CategoryErrors.innerHTML = 'El campo categoría es obligatorio';
                $Category.classList.add('is-invalid')
                break;
            default:
                $Category.classList.remove('is-invalid');
                $Category.classList.add('is-valid');
                $CategoryErrors.innerHTML = ''
                break;
        }
    })

    $SubCategory.addEventListener('change', function () {
        switch (true) {
            case !$SubCategory.value.trim():
                $SubCategoryErrors.innerHTML = 'El campo subcategoría es obligatorio';
                $SubCategory.classList.add('is-invalid')
                break;
            default:
                $SubCategory.classList.remove('is-invalid');
                $SubCategory.classList.add('is-valid');
                $SubCategoryErrors.innerHTML = ''
                break;
        }
    })

    $price.addEventListener('blur', function () {
        switch (true) {
            case !$price.value.trim():
                $priceErrors.innerHTML = 'El campo precio es obligatorio';
                $price.classList.add('is-invalid')
                break;
            case !regExFloat.test($price.value):
                $priceErrors.innerHTML = 'El campo precio debe ser un número';
                $price.classList.add('is-invalid')
                break;
            case $price.value < 0:
                $priceErrors.innerHTML = 'El campo precio debe ser mayor a 0';
                $price.classList.add('is-invalid')
                break;
            default:
                $price.classList.remove('is-invalid');
                $price.classList.add('is-valid');
                $priceErrors.innerHTML = ''
                break;
        }
    })

    $discount.addEventListener('blur', function () {
        switch (true) {
            case !$discount.value.trim():
                $discountErrors.innerHTML = 'El campo descuento es obligatorio';
                $discount.classList.add('is-invalid')
                break;
            case !regExNumber.test($discount.value):
                $discountErrors.innerHTML = 'El campo descuento debe ser un número';
                $discount.classList.add('is-invalid')
                break;
            case $discount.value < 0:
                $discountErrors.innerHTML = 'El campo descuento debe ser mayor a 0';
                $discount.classList.add('is-invalid')
                break;
            case $discount.value > 99:
                $discountErrors.innerHTML = 'El campo descuento debe ser menor a 99';
                $discount.classList.add('is-invalid')
                break;
            default:
                $discount.classList.remove('is-invalid');
                $discount.classList.add('is-valid');
                $discountErrors.innerHTML = ''
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

    $description.addEventListener('blur', function () {
        switch (true) {
            case !$description.value.trim():
                $descriptionErrors.innerHTML = 'El campo descripción es obligatorio';
                $description.classList.add('is-invalid')
                break;
            case !regExDescription.test($description.value):
                $descriptionErrors.innerHTML = 'El campo descripción debe tener al menos 20 caracteres';
                $description.classList.add('is-invalid')
                break;
            default:
                $description.classList.remove('is-invalid');
                $description.classList.add('is-valid');
                $descriptionErrors.innerHTML = ''
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

        if(!$terms.checked){
            $terms.classList.add('is-invalid');
            $termsErrors.innerHTML = "Debes aceptar las bases y condiciones"
        }

        let elementosConErrores = document.querySelectorAll(".is-invalid");
        let errores = elementosConErrores.length > 0; 

        if(errores) {
            submitErrors.innerText = "Hay errores en el formulario"
        } else {
            $form.submit()
        }
     })

});