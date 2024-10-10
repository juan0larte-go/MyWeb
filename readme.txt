Inicializar con Git 📌
 

Entrar a la terminal, buscamos la carpeta de nuestro proyecto y entramos a ese directorio con cd  
Dentro de la carpeta donde está el proyecto, se inicializa un control de versión:

git init
 
-------------------------------

Con el comando git status permite ver que archivos se han añadido, de esta forma se hace un seguimiento:

git status
 
-------------------------------

++Nota++: si en la salida dice que hay Untracked files, quiere decir que se tenia un archivo antes de crear el repositorio y hay que agregarlo.  
Para agregar archivos a stage con git add <file.extensión>:  
Por ejemplo si queremos agregar web.html:

git add web.html
 
-------------------------------
Cuando se quiera añadir todo sin especificar, se ejecuta:

git add .

-------------------------------
-------------------------------

Configurar Git localmente 📌
 

En la terminal ejecutar:

git config --global user.name [name]
//[en name colocar el nombre de usuario de GitHub], dar ENTER
git config --global user.email [email]
//[en email colocar el correo de GitHub], dar ENTER
 
-------------------------------

Si quieres comprobar tu configuración, puedes usar un comando para mostrar todas las propiedades que Git ha configurado:

git config --list
 
-------------------------------
Hacer commit 📌
 

Los commits representan el cambio que se guarda en el repositorio de versiones, donde podemos regresar a versiones pasadas y modificarlas. Los commits se pueden considerar como instantáneas o hitos a lo largo de la línea de tiempo de un proyecto de Git. Las confirmaciones se crean con el comando git commit para capturar el estado de un proyecto en ese momento. Las instantáneas de Git siempre se envían al repositorio local (fuente: aquí).  
En la terminal en la ruta del proyecto, ejecutar: git commit -m "Message"   ◦ -m: especifica donde va el mensaje, ◦ "Message": va con comillas y por lo general es la descripción del commit. ◦ Por ejemplo:

git commit -m "Mi primer commit"
 
-------------------------------

Para ver los commit que se ha hecho:

git log
 
-------------------------------

Para subir los commit a GitHub, ir a la página GitHub ya iniciado sesión, en Profile dar donde dice Your repositories y luego en el botón verde New.  
Al configurar el repositorio, se coloca el nombre (se recomienda colocar el mismo que la carpeta que tenemos localmente).  
Se puede poner una descripción en la casilla de “Description”.  
Se puede seleccionar si se quiere público o privado.  
También existen otras casillas que dependiendo de la complejidad del proyecto se requiera configurar.  
Una vez configurado todo, se da en el botón verde Create repository.  
Una vez creado el repositorio, se copia la direcciónn que sale en Quick setup.  
Vamos a la terminal se pone:

git remote add origin <url_que_copiaste>
 
-------------------------------

Para hacer una verificación se hace:

git remote -v
 
-------------------------------

Hacer push 📌
 

El comando git push te permite subir los commits desde tu rama (branch) local en tu repositorio git local al repositorio remoto (fuente: aquí).  
Por defecto, Git elige origin como remoto y tu rama actual como la rama a la que subir. Si tu rama actual es main, el comando git push suministrará los dos parámetros por defecto, o si es master colocar master (fuente: aquí).  
Por ejemplo poner en la terminal:

git push origin main
 
-------------------------------

++Nota++: cada vez que se realice un cambio en el projecto repetir todos los pasos anteriores desde git add hasta hacer el push.