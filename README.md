<p align="center">
  <a>
    <img src="https://firebasestorage.googleapis.com/v0/b/central-tcg.appspot.com/o/logo.png?alt=media&token=5a4b39ec-f278-454d-adb3-c74ea65af1b7" alt="Central-TCG logo" width="200" height="200">
  </a>
</p>

<h3 align="center">Central-TCG</h3>

<p align="center">
  App de e-commerce orientado a la compra/venta de cartas coleccionables.
</p>

## Contenidos

- [Introducción](#introducción)
- [Dependencias](#dependencias)
- [Uso](#uso)
- [Status](#status)

## Introducción

Para ejecutar esta aplicación desde un servidor local asegurate de tener instalado `git` y `nvm`, y ejecutar las siguientes lineas desde el directorio en el que quieras almacenar el proyecto:

```shell
git clone https://github.com/beksiazek/central-tcg.git
git checkout coderhouse-project
npm install
```

Luego para iniciar el servidor ejecuta:

```shell
npm start
```

## Dependencias

- [react](https://es.reactjs.org/)
- [react-router-dom](https://reactrouter.com/)
- [firebase](https://firebase.google.com/)
- [lodash](https://lodash.com/)
- [query-string](https://www.npmjs.com/package/query-string)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [bootstrap](https://getbootstrap.com/)
- [react-icons](https://react-icons.github.io/react-icons)
- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)
- [reac-toastify](https://www.npmjs.com/package/react-toastify)


## Uso

El flujo básico del uso de la aplicación es el siguiente ([ver video](https://firebasestorage.googleapis.com/v0/b/central-tcg.appspot.com/o/usage.webm?alt=media&token=a9d432d6-773f-44d9-a156-991961cfeb34)): 

- Página principal

<p align="center">
    <img src="https://firebasestorage.googleapis.com/v0/b/central-tcg.appspot.com/o/screen1.png?alt=media&token=071a9751-660a-4ad8-974f-127e76317213" alt="landing page" width="700">
</p>

En esta vista se muestran todos los productos. Al clickear una categoría en la navbar se mostrarán de manera filtrada los productos correspondientes.
Al clickear en el botón "Ver más" la pagina será redirigida al detalle del producto en cuestión, ver siguiente vista.

- Detalle del producto

<p align="center">
    <img src="https://firebasestorage.googleapis.com/v0/b/central-tcg.appspot.com/o/screen2.png?alt=media&token=c18fd7b1-14bd-42f5-901a-3ef0540daa5b" alt="product detail" width="700">
</p>

Desde esta vista se aprecia toda la información del producto de manera detallada y se da la posibilidad de agregar ese producto al carrito seleccionando la cantidad deseada. En caso que no haya stock no se mostrarán el selector de cantidad y el botón, sino que se mostrará el mensaje "Sin stock". En caso que haya stock y se haga click en el botón "Agregar al carrito" se mostrará un nuevo botón y un widget en la parte derecha de la barra de navegación, el cual indicará la cantidad de items dentro del carrito, tal como se ve en la siguiente imagen:

<p align="center">
    <img src="https://firebasestorage.googleapis.com/v0/b/central-tcg.appspot.com/o/screen3.png?alt=media&token=ba82a91e-a2f6-4da8-92d6-35287ff007db" alt="product detail" width="700">
</p>

Al clickear el nuevo botón "Finalizar compra" o el widget superior, se redireccionará a la vista del carrito de compra.

- Carrito

<p align="center">
    <img src="https://firebasestorage.googleapis.com/v0/b/central-tcg.appspot.com/o/screen4.png?alt=media&token=f66d4109-e921-425e-9d40-4856574c3b02" alt="product detail" width="700">
</p>

Desde esta vista se pueden llevar a cabo diversas acciones sobre el carrito de compra: agregar o quitar unidades de los productos dentro del mismo, eliminar un producto, vaciar el carrito o proceder con la compra. Al hacer click en el botón "Continuar" desde esta vista, se mostrará el formulario de datos del usuario, ver siguiente vista.

- Formulario de Compra

<p align="center">
    <img src="https://firebasestorage.googleapis.com/v0/b/central-tcg.appspot.com/o/screen5.png?alt=media&token=1689fcbc-d6c8-41ef-8558-fa9e8fd2a05c" alt="product detail" width="700">
</p>

El formulario solicita nombre, correo y teléfono del cliente. Si se completa el formulario y los datos son válidos, se habilitará el botón "Finalizar compra". En caso de que uno o más campos sean inválidos, se mostrarán resaltados con un borde rojo. Cada campo cuenta con un tooltip que le da al usuario un indicio del formato con que debe cumplir el dato a ingresar. 

Finalmente, luego de completar el formulario con datos válidos y clickear el botón "Finalizar compra" se generará la orden de compra y se mostrará al usuario un mensaje confirmando la transacción acompañado del id de la orden, tal como se muestra en la siguiente vista:

-Compra finalizada

<p align="center">
    <img src="https://firebasestorage.googleapis.com/v0/b/central-tcg.appspot.com/o/screen6.png?alt=media&token=a2b8f07c-8e2e-4b29-b502-48ae73247c97" alt="product detail" width="700">
</p>


## Status

La aplicación se encuentra en continuo desarrollo y mejora, estén atentos a nuevas features!

Muchas gracias!
