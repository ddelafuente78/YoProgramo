package ar.com.portfolio.portfolioweb.Repository;

import ar.com.portfolio.portfolioweb.Model.Proyectos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProyectosRepository extends JpaRepository<Proyectos,Long> {

}
