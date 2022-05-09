package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Skill;

import java.util.List;

public interface ISkillServices {

    public List<Skill> getSkills();

    public void guardarSkill(Skill skill);

    public void borrarSkill(Long id);

    public Skill encontrarSkill(Long id);
}
