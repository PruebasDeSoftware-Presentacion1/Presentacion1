# Presentación 1 Pruebas de Software

## Video presentación: https://www.youtube.com/watch?v=N3DiJOjNcJY

# Instalación Aplicación:

# Front End:
#### Requisitos:
* ##### Tener instalado nodejs
### Instalación:
#### 1. Instalar dependencias: Ir a directorio base del repositorio, abrir terminal y esccribir comando:
    $ npm i
#### 2. Iniciar aplicativo web: Ir a carpeta base del repositorio, abrir terminal y escribir comando:
    $ npm start

# Back End:
#### Requisitos: 
* ##### Tener instalado Python, versión > 3.7
* ##### Tener instalado base de datos MySQL
### Instalación:
#### 1. Intalar entorno virtual:
    $ pip install virtualenv
#### 2. Ir al directorio de proyecto, carpeta Presentacion1-BackEnd y crear entorno:
    $ cd /Presentacion1/Presentacion1-BackEnd
    $ virtualenv -p python "nombre_entorno_virtual"
#### 3. Entrar al entorno virtual:
    $ nombre_entorno\bin\activate (windows powershell)
    $ source nombre_entorno/bin/activate (linux wsl)
#### 4. Instalar dependencias:
    $ pip install fastapi
    $ pip install uvicorn
    $ pip install mysql-connector-python

#### 5. En carpeta config, archivo connection_mysql.py agregar credenciales de base de datos mysql.

#### 6. Iniciar FastApi (por defecto localhost:8000):
    $ uvicorn app:app
    
# Ejecución y permisos de aplicación en Windows:
#### 1. Verificar Restricción: Abrir Windows PowerShell como administrador, y escribir comando:
    $ Get-ExecutionPolicy
#### 1.1 Si aparece "Restrict", cambiar a estado RemoteSigned:
    $ Set-ExecutionPolicy RemoteSigned
#### 1.2 Si aparece RemoteSigned, cerrar PowerShell:
    $ exit
    
# MySQL:
#### 1. Abrir shell mysql, de preferencia MySQL Workbench
#### 2. Crear un esquema de nombre a su preferencia
#### 3. Abrir hoja de sql y entrar a ese esqeuma:
    $ use "nombre_esquema"
#### 4. Crear tablas:
##### 4.1 ejercicios_disponibles:
    $ CREATE TABLE ejercicios_disponibles (
	id_ejercicio bigint unsigned auto_increment primary key,
    nombre_ejercicio varchar(255),
    descripcion_ejercicio varchar(255),
    entrenador varchar(255),
    imagen varchar(255)
    );
##### 4.2 ejercicios_disponibles_detalles:
    $ CREATE TABLE ejercicios_disponibles_detalles (
    id_ejercicio bigint unsigned,
    tipo_equipo varchar(255),
    calorias bigint,
    tiempo_ejecucion_minutos bigint,
    zona_involucrada varchar(255),
    FOREIGN KEY (id_ejercicio) REFERENCES ejercicios_disponibles(id_ejercicio) on delete cascade on update cascade);
##### 4.3 detalle_dia:
    $ CREATE TABLE detalle_dia (
	id_detalle bigint unsigned auto_increment primary key,
    e1 bigint unsigned,
    e2 bigint unsigned,
    e3 bigint unsigned,
    FOREIGN KEY (e1) REFERENCES ejercicios_disponibles(id_ejercicio) on delete cascade on update cascade,
    FOREIGN KEY (e2) REFERENCES ejercicios_disponibles(id_ejercicio) on delete cascade on update cascade,
    FOREIGN KEY (e3) REFERENCES ejercicios_disponibles(id_ejercicio) on delete cascade on update cascade
);
##### 4.4 ejercicios_dia:
    $ CREATE TABLE ejercicios_dia (
	id_dia bigint unsigned auto_increment primary key,
	id_ed bigint unsigned,
    FOREIGN KEY (id_ed) REFERENCES detalle_dia(id_detalle) on delete cascade on update cascade
);
##### 4.5 planes_personalizados:
    $ CREATE TABLE planes_personalizados (
	id_plan bigint unsigned auto_increment primary key,
    ejercicio_1 bigint unsigned,
    ejercicio_2 bigint unsigned,
    ejercicio_3 bigint unsigned,
    ejercicio_4 bigint unsigned,
    duracion_plan_semanas int,
    fecha_creacion date,
    FOREIGN KEY (ejercicio_1) REFERENCES ejercicios_disponibles(id_ejercicio) on delete cascade on update cascade,
    FOREIGN KEY (ejercicio_2) REFERENCES ejercicios_disponibles(id_ejercicio) on delete cascade on update cascade,
    FOREIGN KEY (ejercicio_3) REFERENCES ejercicios_disponibles(id_ejercicio) on delete cascade on update cascade,
    FOREIGN KEY (ejercicio_4) REFERENCES ejercicios_disponibles(id_ejercicio) on delete cascade on update cascade
    );
#### 5. Inserción datos estáticos de la aplicación (ejemplos):
##### 5.1 ejercicios_disponible:
    $ insert into ejercicios_disponibles (nombre_ejercicio, descripcion_ejercicio, entrenador, imagen) values(
	"sentadilla con barra",
    "colocando la barra en la parte superior de la espalda, flexiona las piernas y baja la cadera hasta que los muslos estén paralelos al suelo, luego vuelve a la posición inicial",
    "Eric Durante","https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/media-sentadilla-con-barra-init-pos-8649.png");
##### 5.2 ejercicios_disponibles_detalles:
    $ insert into ejercicios_disponibles_detalles(id_ejercicio, tipo_equipo, calorias, tiempo_ejecucion_minutos, zona_involucrada) values (
	1, "barra con pesas y soporte de barra", 300, 30, "Trabaja principalmente los músculos de las piernas, incluyendo los cuádriceps, glúteos y músculos isquiotibiales");
##### 5.3 planes_personalizados:
    $ insert into planes_personalizados (ejercicio_1, ejercicio_2, ejercicio_3, ejercicio_4, duracion_plan_semanas, fecha_creacion) values (
	4,6,3,5,4, NOW());

#### 6. Instalacion jasmine:
    $ npm install -g jasmine
##### 6.1 iniciar jasmine en carpeta de pruebas:
    $ cd .\src\specs\
    $ jasmine .\test.js
