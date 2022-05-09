package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Skill;
import ar.com.portfolio.portfolioweb.Repository.SkillRepository;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillServices implements ISkillServices {

    @Autowired
    private SkillRepository skillRepository;

    @Override
    public List<Skill> getSkills(){
        List<Skill> listaSkill = skillRepository.findAll();
        return listaSkill;
    }

    @Override
    public void guardarSkill(Skill skill) {skillRepository.save(skill); }

    @Override
    public void borrarSkill(Long id){
        skillRepository.deleteById(id);
    }

    @Override
    public Skill encontrarSkill(Long id) {
        return skillRepository.findById(id).orElse(null);
    }

}
