### Sprint 2

## ¿Qué hicimos en la semana?

Revisión de rutas de cada vista con su respectivo render. Arreglamos cositas de los html's que habían quedado pendiente del sprint anterior. Separamos las vistas de views en carpetas y se realizó una database de los productos mostrados en la página. Se modificó los render de los controladores para que quede todo conectado y configurado, además se hizo los partials y se aplicó a cada vista para comprobar su correcta funcionalidad. Rehicimos la vista de detalle. Tuvimos problemas con la database (la perdimos y no quedó guardada) por lo tanto tuvimos que comenzarla de cero.

## ¿Tuvimos impedimentos?

Al momento de reagrupar las vistas en carpetas y unificar archivos, tuvimos problemas con los estilos que se superponían. Al cambiar todo el sistema de ruteo tuvimos que arreglar la mayoría de los links ya que no llevaban a ningún lado y rompían la página. Nos ocurrió también el hecho de no tener todas las dependencias necesarias instalas para el correcto funcionamiento del código, lo cual nos llevó más tiempo del que creíamos.

### Sprint 3

## ¿Qué hicimos en la semana?

Se crearon vistas con su respectiva lógica, se parcializo el banner, se ordenaron los css y corrigieron errores. hicimos el crud de editar, configuraciones de multer y demás funcionalidades basándonos en el proyecto de eric. se implementó lo visto en clase, acerca de validaciones, mensajes de error y el correcto funcionamiento de multer. se agregaron estilos a diferentes vistas y se corrigieron estilos que se pisaban entre si, lo cual generaba conflicto y producían error a la hora de mostrar la vista.

## ¿Tuvimos impedimentos?

Se invirtió más tiempo de lo estimado en hacer funcionar el crud, se complicó solucionando errores que provenían que las validaciones y multer. tuvimos problemas con css y boostrap ya que no logramos implementar el código de  al nuestro, porque no funcionaba como queríamos y perdimos tiempo haciendo el código desde 0 (mensajes de error y sus estilos).

### Sprint 5

## ¿Qué hicimos en la semana?

Se hizo la ruta post y el controlador para poder loguearse, lo cual hace que reconozca el mail/contraseña y en caso de hacerlo redirecciona al home y se implementaron las validaciones. El panel de admin quedó funcional. Se implementó la cookie quedando en funcionamiento, ajustamos el header en cada vista para que al iniciar sesión no lo rompa. El register y login quedó totalmente funcional validando ya las cuentas existentes. Está en funcionamiento la session y la cookie, e  implementamos el middleware que chequea la cookie. Se hicieron los middlewares de protección de rutas según rol y posteriormente se agregaron a sus rutas correspondientes. Creamos ramas para testear y después mergear con lo obligatorio del sprint. Arreglamos y acomodamos vistas que se habían corrompido, dejándolas funcionales. 

## ¿Tuvimos impedimentos?

Si, con las validaciones respecto al header y los formularios de registro/login. Se nos complicó también el hecho de abarcar muchas tareas a la vez, y por culpa de eso no terminábamos de lograr el objetivo de una tarea, que ya rompiamos lo hecho hasta el momento en otra tarea. Además, una mención honorable a nuestro querido amigo y enemigo Edesur, el cual nos quitó horas y nos hizo perder muchas horas de avance.

### Sprint 6

## ¿Qué hicimos en las semanas?

Se realizó el diagrama para la base de datos, y el script para su creación. Después incluimos los datos que teniamos en los Json para crear y cargar los datos con el mismo script. Se inicializó sequelize y su configuración en conjunto con sus modelos para que funcione correctamente, con esto también se actualizaron los controladores y las rutas para que las vistas queden funcionales. Se hicieron tareas "secundarias" que tenemos en un trello aparte para pulir el proyecto y arreglar estilos.


## ¿Tuvimos impedimentos?

El script dio algunas complicaciones, demasiado prueba y error a la hora de la creación. Logramos dejarlo a tono para que esté completo en base a nuestra vieja database. También tuvimos algunos problemas respecto de los controladores en cuanto a como pasar las subcategorias, ya que solo podiamos hacerlo por la FK y no por su nombre por medio de la relación de tablas. De igual forma, nada que no se peuda solucionar. Tuvimos problemas en cuanto a estilos de las vistas, con algunas cosas que no quedaban en su lugar y se rompian al momento de interactuar con ellas.

### Sprint 7

## ¿Qué hicimos en las semanas?

Agregamos las validaciones correspondientes al login, se agregó también la funcionalidad de eliminar cuenta que solo faltaría pulir (tiene su vista propia). Creamos las validaciones del front y back del lado del admin. Se arregló algunos formularios los cuales fallaban y ahora se puede agregar y editar imagenes, se arreglaron detalles y estilos de varias vistas. 

## ¿Tuvimos impedimentos?

Se tuvo complicaciones en cuanto a los tiempos y el contenido visto en clase. Al crear las validaciones del login se complicó el utilizar usuarios y contraseñas ya creadas pero despues de una ardua jornada tuvo solución.