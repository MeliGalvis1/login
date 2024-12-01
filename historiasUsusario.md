-- Historia de Usuario 1: Registro de Usuarios --

Como visitante del sistema, quiero registrarme con mi nombre, correo electrónico y contraseña, para poder acceder al sistema y utilizar sus funcionalidades.

Criterios de Aceptación:

- El formulario de registro debe validar que todos los campos son obligatorios.
- El sistema debe verificar que el correo electrónico ingresado no esté previamente registrado.
- Si el registro es exitoso, el sistema debe redirigir al usuario a la página de inicio de sesión.
- Si ocurre un error, el usuario debe recibir un mensaje claro indicando el problema.

-- Historia de Usuario 2: Inicio de Sesión --

Como usuario registrado, quiero iniciar sesión con mi correo electrónico y contraseña, para acceder al dashboard personalizado del sistema.

Criterios de Aceptación:

- El formulario de inicio de sesión debe validar que los campos no estén vacíos.
- Si las credenciales son correctas, el sistema debe redirigir al usuario al dashboard.
- Si las credenciales son incorrectas, el usuario debe recibir un mensaje de error.
- El sistema no debe permitir el acceso si el correo electrónico no está registrado.

-- Historia de Usuario 3: Visualización del  --

Como usuario autenticado, quiero acceder al dashboard del sistema, para gestionar mi cuenta y consultar información relevante.

Criterios de Aceptación:

- El dashboard debe estar disponible solo para usuarios autenticados.
- El usuario debe poder visualizar un mensaje de bienvenida personalizado.
- El sistema debe ofrecer opciones de navegación claras (inicio, usuarios, configuración).


-- Historia de Usuario 4: Listado de Usuarios --

Como administrador del sistema, quiero listar todos los usuarios registrados, para gestionar sus datos y verificar la información almacenada.

Criterios de Aceptación:

- El sistema debe devolver un listado de usuarios almacenados en la base de datos.
- Cada registro debe incluir el nombre, correo electrónico y ID del usuario.
- La función debe estar protegida para que solo el administrador pueda acceder.


-- Historia de Usuario 5: Eliminación de Usuarios --

Como administrador del sistema, quiero eliminar usuarios que ya no son necesarios,
para mantener la base de datos limpia y actualizada.

Criterios de Aceptación:

- El sistema debe eliminar el usuario seleccionado de la base de datos.
- El administrador debe confirmar la eliminación antes de proceder.
- El sistema debe notificar sobre el éxito o error de la operación.