# Notas sobre la implementación

## Fase 1

## Fase 2

## Fase 3

## Fase 4 

## Fase 5

## Fase 6


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
