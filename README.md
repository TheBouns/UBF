zona user (role user)
Pantalla inicial: form Login (email y password) botón de registrar.
	if error  vuelve a la pantalla inicial
if registrar Form registrar (nombre, email, password, password2, role user) reenvía form Login
	if registra true envía a Pantalla lista actuación 

Pantalla actuación (id_user):
	Lista las actuaciones (botón)
	botón crear actuación envía a la pantalla de nueva actuación.
	botón de salir (pantalla inicial)

Pantalla de nueva actuación (id_user, date=fecha/hora actual): 
form label actuación: 
- nº servicio: number
- población: string
- provincia: string (Vlcia, Cst, Alc)
- zona operativa Vlcia [1,2,3,4,5], Cst [2,3,4,5,6], ALC [1,2,3,4]
- subzona [1,2,3]

botón de siguiente (pantalla de intervención) 
botón de salir (panatalla inicial)

Pantalla de actuación (id_user, id_actuacion, date, nºservicio, población, provincia, zona, subzona): 
listas que contienen unidades dentro de un cuadro tipo botton;

const calendario {
	turno: [‘A, C’ , ‘B,C’ , ‘B, D’ , ‘A,D’]
	}

const nocturno: fechas ( unidad )

const saliente if turno [0] = A
		   turno [1] = C
		   turno [2] = B
		   turno [3] = D



1ª columna: estado disponible. 
lista las unidades disponibles en un cuadro de tipo botton, están condicionadas por la hora actual (caso1 o 2) se muestran con fondo azul, listar por orden de caso 1 o2, y código. Muestra nameUnidad, código, un check botton para validar y un check botton para salir

para que sea disponible { 

Caso1:
hora actual < jornada laboral & diurno(true) = disponible 
si turno calendario== salientes primero, resto disponible.
	saliente = if calendario.turno (A, C) return  A
		         calendario.turno (B, C) return  C
		         calendario.turno (B, D) return  B
		         calendario.turno (A, D) return  D

		Caso2:
hora actual > jornada laboral & diurno(false) = disponible 
si turno calendario== entrante primero, resto disponible.

entrante = if calendario.turno (A, C) return  C
		          calendario.turno (B, C) return  B
		          calendario.turno (B, D) return  D
		          calendario.turno (A, D) return  A

2ª columna: estado actuando.
muestra lista ordenada por hora de salida, en un cuadro tipo botton de fondo verde.
Si hora salida menor que 2 horas cambia el fondo a color naranja, Si hora salida menor que 1 horas cambia el fondo a color rojo.
	
	botón de terminar. marca la hora de terminar y guarda.
	botón de salir (pantalla inicial), no cierra la actuacion.


Zona Admin (role admin)
Listar/ crear/ borrar /modificar unidades 
listar/ modificar/borrar actuaciones 
Listar/ modificar/borrar usuarios




Base de datos; 
	Tabla Actuación:
		id_actuación: number
		nº de servicio: number
		Población: string
		Provincia: Vlc, Alc, Cst
		Zona operativa: number [1, 2, 3, 4, 5], [1, 2, 3, 4], [2, 3, 4, 5, 6]
		Subzona: number [1, 2, 3]
		Fecha y hora: data 

	Tabla de unidades:
		
		nombre: string
		código: [1211]
		turno: string
		Diurna: true
		Estado {
Disponible: true
			movilizada: false
			actuando: false
			}

	Tabla usuario:
		nombre: string
		email: mail
		password: string
		role: string
![image](https://user-images.githubusercontent.com/94751976/168785899-adb8d0ef-1bc9-456b-b41c-419a5e671401.png)
