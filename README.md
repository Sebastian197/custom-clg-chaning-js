# Custom Console Log

Libreria de consola para mostrar diferentes estilos a los mensajes por consola.

## Instalación

```
npm install -D custom-clg-chaning-js
```

## Uso

Para usarlo seguir las instrucciones.

```
const log = require('custom-clg-chaning-js');

log.ok('Los datos se han enviado correctamente!');
```

## Ejemplos

### Mensajes de tipo confirmación "ok"

```
log.ok('Los datos se han enviado correctamente!');
```

### Mensajes de tipo información "info"

```
log.info('Los datos estan correctos!');
```

### Mensajes de tipo error "error"

```
log.info('Ha ocurrido un error con los datos recibidos!');
```

### Mensajes de tipo warning "warning"

```
log.info('Debes tener precaución!');
```
