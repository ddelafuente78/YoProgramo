package ar.com.portfolio.portfolioweb.Repository;

import ar.com.portfolio.portfolioweb.Model.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienciaRepository extends JpaRepository<Experiencia, Long> {
}
