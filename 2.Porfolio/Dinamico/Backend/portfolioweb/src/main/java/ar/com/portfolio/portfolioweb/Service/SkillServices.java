package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Skill;
import ar.com.portfolio.portfolioweb.Repository.SkillRepository;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

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

    @Override
    public List<Skill> traerSkillXCategorias(Boolean issoft){
        List<Skill> skillXcategoria = skillRepository.findAll();
        skillXcategoria = TypeFilter(issoft, skillXcategoria);
        return skillXcategoria;
    }

    @Override
    public List<Skill> traerCategoriaxTipo(Boolean issoft, String categoria){
        List<Skill> skillcategoriaxtipo = skillRepository.findAll();

        skillcategoriaxtipo = TypeFilter(issoft, skillcategoriaxtipo);

        Predicate<Skill> byCategories = skill -> (skill.getCategoria().equals(categoria));
        List<Skill> result = skillcategoriaxtipo.stream().filter(byCategories).collect(Collectors.toList());

        return result;
    }

    private List<Skill> TypeFilter(Boolean tipo, List<Skill> skillXcategoria){
        return tipo == true ? skillXcategoria.stream().filter(
                x -> x.getIsSoftSkill()).collect(Collectors.toList())
                :
                skillXcategoria.stream().filter(
                        x -> !x.getIsSoftSkill()).collect(Collectors.toList())
                ;
    }
}
