package ar.com.portfolio.portfolioweb.Controller;

import ar.com.portfolio.portfolioweb.Model.Skill;
import ar.com.portfolio.portfolioweb.Service.ISkillServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SkillController {

    @Autowired
    private ISkillServices interSkill;

    @GetMapping("/skill/traer")
    public List<Skill> getSkills() {return interSkill.getSkills(); }

    @PostMapping("/skill/crear")
    public String createSkill(@RequestBody Skill skill){
        interSkill.guardarSkill(skill);
        return "Se creo el Skill";
    }

    @DeleteMapping ("/skill/borrar/{id}")
    public String deleteSkill(@PathVariable Long id){
        interSkill.borrarSkill(id);
        return "Se borro el Skill";
    }

    @PutMapping("/skill/editar/{id}")
    public Skill editarSkill(@PathVariable Long id,
                             @RequestParam("isSoftSkill") boolean isSoftSkill,
                             @RequestParam("categoria") String nuevaCategoria,
                             @RequestParam("nombre") String nuevoNombre,
                             @RequestParam("porcentaje") int nuevoPorcentaje){

        Skill skill = interSkill.encontrarSkill(id);

        skill.setSoftSkill(isSoftSkill);
        skill.setPorcentaje(nuevoPorcentaje);
        skill.setNombre(nuevoNombre);
        skill.setCategoria(nuevaCategoria);

        interSkill.guardarSkill(skill);

        return skill;
    }
}
