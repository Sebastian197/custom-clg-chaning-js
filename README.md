# Custom Console Log

Libreria de consola para mostrar diferentes estilos a los mensajes por consola.

## Instalación

```
npm install -D custom-clg-chaning-js
```

## Uso

Para usarlo seguir las instrucciones.

```javascript
const log = require("custom-clg-chaning-js");

log.ok("Los datos se han enviado correctamente!");
```

## Ejemplos

### Mensajes de tipo confirmación "ok"

```javascript
log.ok("Los datos se han enviado correctamente!");
```

### Mensajes de tipo información "info"

```javascript
log.info("Los datos estan correctos!");
```

### Mensajes de tipo error "error"

```javascript
log.error("Ha ocurrido un error con los datos recibidos!");
```

### Mensajes de tipo warning "warning"

```javascript
log.warning("Debes tener precaución!");
```
