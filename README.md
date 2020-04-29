# Chat en tiempo real con Vue.js y Node.js ala WhatsApp

Que es esto y que no es.

Es un sala de chat ala **WhatsApp** hecha por mi desde 0 (si, he picado cada línea de código yo).

Y sí esto es TODO **javascript** el back y el front \m/

He intentado comentar el código extensivamente.

No tiene persistencia de datos, es decir no tiene una base datos detras, el servidor lo único que hace es recibir los mensajes y transmitirlos, los datos de los usuarios están en un JSON y la gestión de quien está online y no es on the fly.

Consta de dos partes:

## Frontend: Vue.js

Esta en el directorio **vue-chat-front** para desarrollo :

~~~ bash

cd vue-chat-front
npm install
npm run serve

~~~

Para producción, suponiendo que ya hemos instalado previamente:

~~~ bash

cd vue-chat-front
npm run build

~~~

Los puertos y dominios son configurables via **.env.development** y **.env.production**.

Cosas que he usado:

* Para generar las notificaciones de audio on the fly (tonejs.github.io)[https://tonejs.github.io/]
* Vuex a destajo con módulos incluidos (vuex)[https://vuex.vuejs.org/guide/modules.html]
* Cliente de websocket (socket.io - client)[https://socket.io/]

## Backend: Node.js

Esto no tiene persistencia de datos, no hay detrás una base de datos que guarda, solo se encarga de recibir los datos y transmitirlos.

La gestión de usuarios la hecho yo con una controlador esta aquí: (User controller)[http://giteado.veiss.com/Veiss/vue-chat/src/branch/master/vue-chat-server/controllers/users.controller.js]

Los datos de los usuarios estan en un JSON y están aquí: (Usuarios)[http://giteado.veiss.com/Veiss/vue-chat/src/branch/master/vue-chat-server/data/users.json]


Que hace esto:

* Levanta un servidor http que gestión las llamadas a la API para el login.
* El servidor http todas las peticiones que no sean a la API las redirige a 'vue-chat-front/dist', es decir al front.
* Levanta un servidor de WebSockets.


Con que lo hace:

* Servidor http con (Express.js)[https://expressjs.com/]
* Servidor websockets (socket.io - server)[https://socket.io/]
* Para las CORS (cors)[https://github.com/expressjs/cors]


Esta en el directorio **vue-chat-serve** para levantarlo, por defecto le he puesto el puerto 3006 pero se puede cambiar:

~~~ bash

cd vue-chat-server
npm install
node index.js

~~~

Para levantarlo producción usar (pm2)[https://pm2.keymetrics.io/] por supuesto.

Dudas consultas insultos (iban@veiss.com)[mailto:iban@veiss.com]