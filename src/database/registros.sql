INSERT INTO apoderados(
    documento_identidad,
    apellido_paterno,
    apellido_materno,
    nombres,
    sexo,
    estado) VALUES 
    ('98453675','DIAZ','HERNANDEZ','ANDREA','F','true'),
    ('98453675','RAMIREZ','ARAUJO','JAVIER','M','true'),
    ('98453675','SANTOS','SALINAS','ELIZABETH','F','true'),
    ('98453675','VILCA','COTRINA','MARIA','F','true'),
    ('98453675','AYALA','VELARDE','SOFIA','F','true'),
    ('98453675','LOZANO','PAZ','MELANY','F','true'),
    ('98453675','FLORES','CHANG','EDISON','M','true'),
    ('98453675','AVILA','CALLE','LUZ','F','true'),
    ('98453675','ARAUJO','VILCA','MARIA','F','true'),
    ('88556321','PAREDES','SANCHEZ','ROBERT','M','true');

INSERT INTO alumnos(
    id_apoderado,
    documento_identidad,
    apellido_paterno,
    apellido_materno,
    nombres,
    fecha_nacimiento,
    sexo,
    estado) VALUES
    (1,'64564578','PEREZ', 'DIAZ','JUAN','01/02/2015','M','true'),
    (2,'78865451','RAMIREZ', 'RAMOS','MARIA','02/02/2016','F','true'),
    (2,'86665959','RAMIREZ', 'RAMOS','WALTER','03/02/2016','M','true'), 
    (3,'54543356','TORRES', 'SANTOS','MILAGROS','02/02/2016','F','true'),
    (4,'87486563','ROJAS', 'VILCA','FLOR','06/02/2016','F','true'),
    (5,'42154519','VARGAS', 'AYALA','ALEX','02/02/2016','M','true'),
    (6,'96526526','MENDOZA', 'LOZANO','SEGUNDO','02/02/2016','M','true'),
    (7,'47474747','FLORES', 'PINEDO','MIGUEL','02/02/2016','M','true'),
    (8,'65364489','QUISPE', 'AVILA','JESUS','02/02/2016','M','true'),
    (9,'45684584','TORRES', 'ARAUJO','JUANA','02/02/2016','F','true'),
    (10,'65712848','PAREDES', 'COTRINA','CESAR','02/02/2016','M','true'),
    (9,'90485848','TORRES', 'ARAUJO ','CARMEN','02/02/2016','F','true'),
    (10,'05884857','PAREDES', 'COTRINA','JORGE','02/02/2016','M','true');


    INSERT INTO docentes(
    documento_identidad,
    apellido_paterno,
    apellido_materno ,
    nombres,
    fecha_nacimiento,
    sexo ,
    estado ) VALUES
    ('69943215','AYALA', 'ARAUJO','SHEYLA','01/02/1982','F','true'),
    ('69943215','COTRINA', 'TORRES','DIANA','01/02/1982','F','true'),
    ('69943215','ROGERS', 'QUISPE','ELIZABETH','01/02/1982','F','true'),
    ('45667872','PINEDO', 'RAMIREZ','FLOR','02/02/1985','F','true');    

INSERT INTO aulas(
    nombre,
    capacidad ) VALUES
    ('AULA 1',18),
    ('AULA 2',16),
    ('AULA 3',18),
    ('AULA 4',20);    

    
INSERT INTO niveles (
    nombre) VALUES 
    ('2 AÑOS'),
    ('3 AÑOS'),
    ('4 AÑOS'),
    ('5 AÑOS');

    
INSERT INTO distribucion_ambientes (
    id_docente ,
    id_aula ,
    id_nivel ,
    anio ,
    estado
   ) VALUES 
    (1,1,1,2021,true),
    (2,2,2,2021,true),
    (3,3,3,2021,true),
    (4,4,4,2021,true);


    INSERT INTO usuarios (
        correo,
    username,
    clave,
    estado) VALUES 
    ('diegobaesv@travesuras.com','diegobaesv','12345','true'),
       ('diegocas@travesuras.com','diegocas','12345','true')


