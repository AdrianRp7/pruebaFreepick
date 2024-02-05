# Notas del desarrollador

## Fase 2
En la fase dos para poder cambiar el texto se ha añadido al componente texto un input dónde se puede cambiar el valor. Este input se teleporta a otro elemento dentro del App.vue (en estos momentos el lugar esta hardcodeado, se podría añadir un prop para cambiarlo).

Esto se ha hecho así para mantener la funcionalidad del cambio de color contenida dentro del TextComponent y no tenerla en App u otro lugar.

## Fase 3
Aquí el problema principal que me he encontrado, es que los elementos no tenían que estar focuseados para ser los activos. Lo que impedía, poder aplicarles eventos directamente, a no ser que les hiciera click y luego aplicará el evento sin hacer nada más (usando tabIndex). Y hacer que perdiera el foco cuando clickaba en otro lugar me daba problemas para modificar el color de texto. Por ello, estos eventos se controlan desde la App.vue, y siempre y cuando no se hagan contra un input.

## Fase 4 
En esta parte, al no saber si tenía que mostrar el color o el texto, he puesto ambas en el panel. Esté esta a la izquierda del canvas.

## Fase 6
En esta fase, en vez de crear un panel con el search, he preferido pasarlo a un popup por dos motivos. Dejar más espacio en la pantalla principal del canvas, y que sea más para el usuario el poder seleccionar las imágenes.

Cuando estas dentro del popup, y haces la búsqueda te saldrán imagenes. Si haces click a una imagen, esta se añadirá al canvas y se mostrará un alert para indicarlo.

El botón para abrirlo es Add Image Api.

# Pikieditor

## Recomendación IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```


### Run Unit Tests with [Vitest](https://vitest.dev/) - Ejecuta cualquier archivo .spec o .test que esté bajo src

```sh
npm run test:unit
```


# Tecnologías usadas
- Vue 3 https://vuejs.org/
- Typescript https://www.typescriptlang.org/
- Pinia https://pinia.vuejs.org/
- Moveable https://daybrush.com/moveable/release/latest/doc/
- Vitest https://vitest.dev/

# Archivos clave

### Store.ts

Se encarga de gestionar el estado global de la aplicación

### useTransformManager.ts

Encargado de gestionar la caja selección, provee eventos con los datos necesarios para aplicar las transformaciones a los elementos seleccionados
puedes encontrar la api de esta librería en https://daybrush.com/moveable/release/latest/doc/

### Element.ts

Clase abstracta de la que van a extender todos nuestros tipos de elementos

# La Prueba

La clases y atributos incluidos en el proyecto son solo un ejemplo, puedes añadir las que consideres necesarias.

No es necesario cumplimentar todas las fases en orden, en el caso de que te atasques puedes continuar con el siguiente.
Los tests no son necesarios pero si un plus.

### Fase 1
 1. Permitir cambiar el color de fondo del canvas
 2. Permitir cambiar el tamaño del canvas

### Fase 2
 1. Añadir al elemento Text la posibilidad de ser escalado
 2. Añadir al elemento Text la posibilidad de cambiar el color de texto

### Fase 3
 1. Los elementos pueden ser eliminados con la tecla suprimir
 2. Los elementos pueden ser copiados a partir de un botón y con la tecla ctrl+c
 3. Los elementos pueden ser cortados con la tecla ctrl+x
 4. Los elementos pueden ser pegados a partir de un botón y con la tecla ctrl+v

### Fase 4
 1. Añade un panel donde se muestre todos los colores únicos que hay en el documento (tanto de fondo como de elementos)

### Fase 5
 1. Añadir la posibilidad de insertar un elemento de tipo de imagen al canvas
 2. La imagen debe poder ser drageada, rotada y escalada al igual que los elementos de tipo Text

### Fase 6
 1. Añade un panel donde se pueda hacer una búsqueda de imágenes a partir de una palabra clave, para ello puedes consumir el endpoint https://wepik.com/api/images/freepik?query=keyword
 2. Añade la posibilidad de insertar una imagen desde el panel de búsqueda
