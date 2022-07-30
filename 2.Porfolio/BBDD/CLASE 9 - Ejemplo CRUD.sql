CREATE SCHEMA `miBase`;

USE mibase;

CREATE TABLE `miBase`.`clientes` (
  `cliente_id` INT NOT NULL,
  `nombre_apellido` VARCHAR(100) NULL,
  `direccion` varchar(100) NULL,
  `telefono` VARCHAR(20) NULL,
  PRIMARY KEY (`cliente_id`)
);

CREATE TABLE `miBase`.`facturas` (
  `facturas_id` INT NOT NULL,
  `folio` VARCHAR(15) NULL,
  `fecha_factura` DATE NOT NULL,
  `iva` float(5,1) NULL,
  `total` float(5,2) NULL,
  `cliente_id` INT NULL,
  PRIMARY KEY (`facturas_id`),
  CONSTRAINT `fk_id_clientes`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `miBase`.`clientes` (`cliente_id`)
   );

CREATE TABLE `miBase`.`detalle` (
  `detalle_id` INT NOT NULL,
  `nombre_producto` VARCHAR(20) NULL,
  `precio_unitario` float(5,2) NULL,
  `cantidad` int NULL,
  `facturas_id` INT NULL,
  PRIMARY KEY (`detalle_id`),
  CONSTRAINT `fk_id_facturas`
    FOREIGN KEY (`facturas_id`)
    REFERENCES `miBase`.`facturas` (`facturas_id`)
);

-- Esto es un comentario dentro del area de trabajo.
-- Ejecutar un reverse engineer

insert into clientes values (1, 'Juan Perez', 'Suipacha 21', '3265698565');
insert into facturas values (100, 'A231YH2DT45GH0', '2022-01-25', 10.5, 341.73, 1);
insert into detalle values (1, 'Campera', 25.3, 2, 100);