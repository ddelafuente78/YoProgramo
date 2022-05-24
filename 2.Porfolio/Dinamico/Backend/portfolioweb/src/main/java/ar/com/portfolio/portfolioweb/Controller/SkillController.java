package ar.com.portfolio.portfolioweb.Controller;

import ar.com.portfolio.portfolioweb.Model.Skill;
import ar.com.portfolio.portfolioweb.Service.ISkillServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class SkillController {

    @Autowired
    private ISkillServices interSkill;

    @GetMapping("/skill/traer")
    public List<Skill> getSkills() {return interSkill.getSkills(); }

    @GetMapping("/skill/treacategorias/{issoft}")
    public List<Skill> getCategories(@PathVariable Boolean issoft){
        return interSkill.traerSkillXCategorias(issoft);
    }

    @GetMapping("/skill/treacategoriasxtipo/{issoft}/{categoria}")
    public List<Skill> getCategories(@PathVariable Boolean issoft,
                                     @PathVariable String categoria){
        return interSkill.traerCategoriaxTipo(issoft,categoria);
    }

    @PostMapping("/skill/crear")
    public String createSkill(@RequestBody Skill skill){
        interSkill.guardarSkill(skill);
        return "{\"rpta\":\"Se creo el Skill\"}";
    }

    @DeleteMapping ("/skill/borrar/{id}")
    public String deleteSkill(@PathVariable Long id){
        interSkill.borrarSkill(id);
        return "{\"rpta\":\"Se borro el skill\"}";
    }

    @PutMapping("/skill/editar/{id}")
    public Skill editarSkill(@PathVariable Long id,
                             @RequestParam("isSoftSkill") Boolean isSoftSkill,
                             @RequestParam("categoria") String nuevaCategoria,
                             @RequestParam("nombre") String nuevoNombre,
                             @RequestParam("porcentaje") int nuevoPorcentaje){

        Skill skill = interSkill.encontrarSkill(id);

        skill.setIsSoftSkill(isSoftSkill);
        skill.setPorcentaje(nuevoPorcentaje);
        skill.setNombre(nuevoNombre);
        skill.setCategoria(nuevaCategoria);

        interSkill.guardarSkill(skill);

        return skill;
    }
}
