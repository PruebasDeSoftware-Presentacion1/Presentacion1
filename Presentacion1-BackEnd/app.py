from fastapi import FastAPI
from config.connection_mysql import mydb
from typing import Dict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",  # Permitir solicitudes de este origen
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#GENERAR UN SUPUESTO QUE MAXIMO SE PUEDEN AGREGAR 3 EJERCICIOS AL ENTRENAMIENTO DIARIO
@app.get("/ejercicios")
async def root():
    cursor = mydb.cursor()
    cursor.execute("SELECT * FROM ejercicios_disponibles")
    results = cursor.fetchall()
    return results

@app.get("/planes")
async def root():
    dict_planes = {}
    cursor = mydb.cursor()
    cursor.execute("SELECT * FROM planes_personalizados")
    results = cursor.fetchall()
    for row in results:
        for i in range(1,5):
            cursor.execute('SELECT * FROM ejercicios_disponibles where id_ejercicio = ' + str(row[i]))
            ejercicios = cursor.fetchall()

            if row[0] not in dict_planes.keys():
                dict_planes[row[0]] = [ejercicios[0]]
            else:
                dict_planes[row[0]].append(ejercicios[0])
    return dict_planes

@app.delete("/destroy_entrenamiento")
async def root(data: Dict):
    id_detalle = data["id_detalle"]
    cursor = mydb.cursor()
    cursor.execute("delete FROM detalle_dia where id_detalle = {}".format(id_detalle))
    mydb.commit()
    return "results"

@app.put("/editar_entrenamientos")
async def root(data: Dict):
    if(len(data)==2):
        id_detalle = data["id_detalle"]
        e1 = data["e1"]
        consulta = "UPDATE detalle_dia SET e1={} WHERE id_detalle = {}".format(e1,id_detalle)
    elif(len(data)==3):
        id_detalle = data["id_detalle"]
        e1 = data["e1"]
        e2 = data["e2"]
        consulta = "UPDATE detalle_dia SET e1={},e2={} WHERE id_detalle = {}".format(e1,e2,id_detalle)
    elif(len(data)==4):
        id_detalle = data["id_detalle"]
        e1 = data["e1"]
        e2 = data["e2"]
        e3 = data["e3"]
        consulta = "UPDATE detalle_dia SET e1={},e2={},e3{} WHERE id_detalle = {}".format(e1,e2,e3,id_detalle)
    else:
        return "Error"
    cursor = mydb.cursor()
    cursor.execute(consulta)
    mydb.commit()
    return "ok"

@app.get("/entrenamientos")
async def root():
    cursor = mydb.cursor()
    cursor.execute("SELECT * FROM detalle_dia")
    results = cursor.fetchall()
    return results

@app.post("/agregar_entrenamiento")
async def root(data: Dict):
    if len(data) ==1:
        cursor1 = mydb.cursor()
        e1 = data["e1"]
        cursor1.execute("INSERT INTO detalle_dia (e1) values ({})".format(e1))
        id_generado = cursor1.lastrowid
        cursor1.execute("INSERT INTO ejercicios_dia (id_ed) values ({})".format(id_generado))
        #print(id_generado)
        mydb.commit()

    elif len(data) ==2:
        cursor1 = mydb.cursor()
        e1 = data["e1"]
        e2 = data["e2"]
        cursor1.execute("INSERT INTO detalle_dia (e1,e2) values ({}, {})".format(e1, e2))
        id_generado = cursor1.lastrowid
        cursor1.execute("INSERT INTO ejercicios_dia (id_ed) values ({})".format(id_generado))
        #print(id_generado)
        mydb.commit()
    else:
        e1 = data["e1"]
        e2 = data["e2"]
        e3 = data["e3"]
        cursor1 = mydb.cursor()
        cursor1.execute("INSERT INTO detalle_dia (e1,e2,e3) values ({},{},{})".format(e1,e2,e3))
        # Obtener el ID autogenerado
        id_generado = cursor1.lastrowid
        #print(id_generado)
        cursor1.execute("INSERT INTO ejercicios_dia (id_ed) values ({})".format(id_generado))
        mydb.commit() 
    cursor1.close()
    mydb.close()

    return "ok"