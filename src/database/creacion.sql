DROP TABLE IF EXISTS apoderados; 
CREATE TABLE apoderados(
    id_apoderado SERIAL PRIMARY KEY,
    documento_identidad CHAR(8) NOT NULL,
    apellido_paterno VARCHAR(250) NOT NULL,
    apellido_materno VARCHAR(250),
    nombres VARCHAR(500) NOT NULL,
    fecha_nacimiento DATE,
    fecha_inscripcion DATE,
    fecha_baja DATE,
    sexo CHAR(1) NOT NULL,
    telefono VARCHAR(20),
    direccion_casa VARCHAR(1024),
    estado boolean NOT NULL
);

DROP TABLE IF EXISTS alumnos; 
CREATE TABLE alumnos(
    id_alumno SERIAL PRIMARY KEY,
    id_apoderado INTEGER,
    documento_identidad CHAR(8) NOT NULL,
    apellido_paterno VARCHAR(250) NOT NULL,
    apellido_materno VARCHAR(250),
    nombres VARCHAR(500) NOT NULL,
    fecha_nacimiento DATE,
    fecha_inscripcion DATE,
    fecha_baja DATE,
    sexo CHAR(1) NOT NULL,
    tipo_sangre CHAR(5),
    telefono_emergencia VARCHAR(20),
    direccion_casa VARCHAR(1024),
    nombre_imagen VARCHAR(1024),
    host_imagen VARCHAR(1024),
    estado boolean NOT NULL,
    CONSTRAINT fk_apoderado
      FOREIGN KEY(id_apoderado) 
	  REFERENCES apoderados(id_apoderado)
      ON DELETE CASCADE


);

DROP TABLE IF EXISTS docentes; 
CREATE TABLE docentes(
    id_docente SERIAL PRIMARY KEY,
    documento_identidad CHAR(8) NOT NULL,
    apellido_paterno VARCHAR(250) NOT NULL,
    apellido_materno VARCHAR(250),
    nombres VARCHAR(500) NOT NULL,
    fecha_nacimiento DATE,
    fecha_inscripcion DATE,
    fecha_baja DATE,
    sexo CHAR(1) NOT NULL,
    especialidad CHAR(6),
    telefono VARCHAR(20),
    direccion_casa VARCHAR(1024),
    nombre_imagen VARCHAR(1024),
    host_imagen VARCHAR(1024),
    estado boolean NOT NULL
);


DROP TABLE IF EXISTS aulas; 
CREATE TABLE aulas(
    id_aula SERIAL PRIMARY KEY,
    nombre VARCHAR(250) NOT NULL,
    capacidad INTEGER
);

DROP TABLE IF EXISTS niveles ; 
CREATE TABLE niveles (
    id_nivel SERIAL PRIMARY KEY,
    nombre VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS distribucion_ambientes ; 
CREATE TABLE distribucion_ambientes (
    id_distribucion_ambiente SERIAL PRIMARY KEY,
    id_docente INTEGER,
    id_aula INTEGER,
    id_nivel INTEGER NOT NULL,
    anio INTEGER NOT NULL,
    estado BOOLEAN NOT NULL,
    CONSTRAINT fk_docente
      FOREIGN KEY(id_docente) 
	  REFERENCES docentes(id_docente)
      ON DELETE CASCADE,
    CONSTRAINT fk_aula
      FOREIGN KEY(id_aula) 
	  REFERENCES aulas(id_aula)
      ON DELETE CASCADE,
    CONSTRAINT fk_nivel
      FOREIGN KEY(id_nivel) 
	  REFERENCES niveles(id_nivel)
      ON DELETE CASCADE
);

DROP TABLE IF EXISTS usuarios ; 
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    correo VARCHAR(250),
    username VARCHAR(20) NOT NULL,
    clave VARCHAR(250) NOT NULL,
    estado BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS matriculas ; 
CREATE TABLE matriculas (
    id_matricula SERIAL PRIMARY KEY,
    id_distribucion_ambiente INTEGER,
    id_alumno INTEGER,
    id_usuario INTEGER NOT NULL,
    fecha_matricula DATE,
    CONSTRAINT fk_distribucion_ambiente
      FOREIGN KEY(id_distribucion_ambiente) 
	  REFERENCES distribucion_ambientes(id_distribucion_ambiente)
      ON DELETE CASCADE,
    CONSTRAINT fk_alumno
      FOREIGN KEY(id_alumno) 
	  REFERENCES alumnos(id_alumno)
      ON DELETE CASCADE,
    CONSTRAINT fk_usuario
      FOREIGN KEY(id_usuario) 
	  REFERENCES usuarios(id_usuario)
      ON DELETE CASCADE
);

DROP TABLE IF EXISTS pagos ; 
CREATE TABLE pagos (
    id_pago SERIAL PRIMARY KEY,
    id_alumno INTEGER,
    id_usuario INTEGER NOT NULL,
    monto FLOAT,
    metodo VARCHAR(6),
    concepto VARCHAR(6),
    fecha_pago DATE,
    CONSTRAINT fk_alumno
      FOREIGN KEY(id_alumno) 
	  REFERENCES alumnos(id_alumno)
      ON DELETE CASCADE,
    CONSTRAINT fk_usuario
      FOREIGN KEY(id_usuario) 
	  REFERENCES usuarios(id_usuario)
      ON DELETE CASCADE
);



