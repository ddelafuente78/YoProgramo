package ar.com.portfolio.portfolioweb.Repository;

import ar.com.portfolio.portfolioweb.Model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<Skill,Long> {
}
