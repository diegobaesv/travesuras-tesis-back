INSERT INTO apoderados(
    documento_identidad,
    apellido_paterno,
    apellido_materno,
    nombres,
    sexo,
    estado) VALUES 
    ('98453675','DIAZ','HERNANDEZ','ANDREA','F','true'),
    ('88556321','RAMIREZ','SANCHEZ','ROBERT','M','true');

INSERT INTO alumnos(
    id_apoderado,
    documento_identidad,
    apellido_paterno,
    apellido_materno,
    nombres,
    fecha_nacimiento,
    sexo,
    estado) VALUES
    (1,'14564578','PEREZ', 'DIAZ','JUAN','01/02/2015','M','true'),
    (2,'78865451','RAMIREZ', 'LOPEZ','MARIA','02/02/2016','F','true');    


    INSERT INTO docentes(
    documento_identidad,
    apellido_paterno,
    apellido_materno ,
    nombres,
    fecha_nacimiento,
    sexo ,
    especialidad,
    estado ) VALUES
    ('69943215','ROGERS', 'AMERICA','STEVE','01/02/1982','M','ED_INI','true'),
    ('45667872','STARK', 'IRON','TONY','02/02/1985','M','ED_INI','true');    

INSERT INTO aulas(
    nombre,
    capacidad ) VALUES
    ('AULA 1',18),
    ('AULA 2',20);    

    
INSERT INTO niveles (
    nombre) VALUES 
    ('3 AÑOS'),
    ('4 AÑOS');

    
INSERT INTO distribucion_ambientes (
    id_docente ,
    id_aula ,
    id_nivel ,
    anio ,
    estado
   ) VALUES 
    (1,1,1,2021,true),
    (2,2,2,2021,true);


    INSERT INTO usuarios (
    username,
    clave,
    estado) VALUES 
    ('diegobaesv','12345','true')


