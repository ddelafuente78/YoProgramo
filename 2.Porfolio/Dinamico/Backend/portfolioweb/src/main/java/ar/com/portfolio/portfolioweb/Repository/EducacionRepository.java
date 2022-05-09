package ar.com.portfolio.portfolioweb.Repository;

import ar.com.portfolio.portfolioweb.Model.Educacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducacionRepository extends JpaRepository<Educacion,Long> {
}
