-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Portfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Portfolio` DEFAULT CHARACTER SET utf8 ;
USE `Portfolio` ;

-- -----------------------------------------------------
-- Table `Portfolio`.`Candidatos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`Candidatos` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(25) NOT NULL,
  `apellido` VARCHAR(25) NOT NULL,
  `foto` VARCHAR(100) NULL,
  `banner` VARCHAR(100) NULL,
  `acercade` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`Experiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`Experiencia` (
  `id` INT NOT NULL,
  `anio_desde` YEAR NOT NULL,
  `anio_hasta` YEAR NOT NULL,
  `empresa` VARCHAR(20) NOT NULL,
  `detalle` VARCHAR(21000) NULL,
  `Candidato_id` INT NOT NULL,
  PRIMARY KEY (`Candidato_id`, `id`),
  -- INDEX `fk_Experiencia_Candidato_idx` (`Candidato_id` ASC) VISIBLE,
  CONSTRAINT `fk_Experiencia_Candidato`
    FOREIGN KEY (`Candidato_id`)
    REFERENCES `Candidatos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`Educacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`Educacion` (
  `id` INT NOT NULL,
  `anio_desde` YEAR NOT NULL,
  `anio_hasta` YEAR NOT NULL,
  `institucion` VARCHAR(45) NOT NULL,
  `detalle` VARCHAR(20000) NULL,
  `candidato_id` INT NOT NULL,
  PRIMARY KEY (`candidato_id`, `id`),
  -- INDEX `fk_Candidato_id_idx` (`candidato_id` ASC) VISIBLE,
  CONSTRAINT `fk_Candidato_id`
    FOREIGN KEY (`candidato_id`)
    REFERENCES `Portfolio`.`Candidatos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`CategoriasSkills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`CategoriasSkills` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`Skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`Skills` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(20) NULL,
  `porcentaje` TINYINT NULL,
  `CategoriasSkills_id` INT NOT NULL,
  `Candidato_id` INT NOT NULL,
  PRIMARY KEY (`id`, `CategoriasSkills_id`, `Candidato_id`),
  -- INDEX `fk_Skills_CategoriasSkills1_idx` (`CategoriasSkills_id` ASC) VISIBLE,
  -- INDEX `fk_Skills_Candidato1_idx` (`Candidato_id` ASC) VISIBLE,
  CONSTRAINT `fk_Skills_CategoriasSkills1`
    FOREIGN KEY (`CategoriasSkills_id`)
    REFERENCES `Portfolio`.`CategoriasSkills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Skills_Candidato1`
    FOREIGN KEY (`Candidato_id`)
    REFERENCES `Portfolio`.`Candidatos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`Proyectos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`Proyectos` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(20) NOT NULL,
  `anio_inicio` YEAR NULL,
  `anio_fin` YEAR NULL,
  `descripcion` VARCHAR(10000) NULL,
  `Candidatos_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Candidatos_id`),
  -- INDEX `fk_Proyectos_Candidatos1_idx` (`Candidatos_id` ASC) VISIBLE,
  CONSTRAINT `fk_Proyectos_Candidatos1`
    FOREIGN KEY (`Candidatos_id`)
    REFERENCES `Portfolio`.`Candidatos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
