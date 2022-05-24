package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Skill;

import java.util.List;

public interface ISkillServices {

    List<Skill> getSkills();

    void guardarSkill(Skill skill);

    void borrarSkill(Long id);

    Skill encontrarSkill(Long id);

    List<Skill> traerSkillXCategorias(Boolean isSoft);

    List<Skill> traerCategoriaxTipo(Boolean isSoft, String categoria);
}
