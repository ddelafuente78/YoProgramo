package ar.com.portfolio.portfolioweb.Controller;

import ar.com.portfolio.portfolioweb.Model.Experiencia;
import ar.com.portfolio.portfolioweb.Service.IExperienciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class ExperienciaController {

    @Autowired
    private IExperienciaService interExperiencia;

    @GetMapping("/experiencia/traer")
    public List<Experiencia> getExperiencias(){
        return interExperiencia.getExperiencias();
    }

    @GetMapping("/experiencia/encontrar/{id}")
    public Experiencia getExperiencia(@PathVariable Long id){
        return interExperiencia.encontrarExperiencia(id);
    }

    @PostMapping("/experiencia/crear")
    public String createExperiencia(@RequestBody Experiencia exp){
        interExperiencia.guardarExperiencia(exp);
        return "{\"rpta\":\"Se creo la experiencia\"}";
    }

    @DeleteMapping("/experiencia/borrar/{id}")
    public String deleteExperiencia(@PathVariable Long id){
        interExperiencia.borrarExperciencia(id);
        return "{\"rpta\":\"Se borro la experiencia\"}";
    }

    @PutMapping ("/experiencia/editar/{id}")
    public Experiencia editarExperiencia(@PathVariable Long id,
                                     @RequestParam ("aniodesde") int nuevoAnioDesde,
                                     @RequestParam ("aniohasta") int nuevoAnioHasta,
                                     @RequestParam ("empresa") String nuevaEmpresa,
                                     @RequestParam ("detalle") String nuevoDetalle){

        Experiencia exp = interExperiencia.encontrarExperiencia(id);

        exp.setAniodesde(nuevoAnioDesde);
        exp.setAniohasta(nuevoAnioHasta);
        exp.setEmpresa(nuevaEmpresa);
        exp.setDetalle(nuevoDetalle);

        interExperiencia.guardarExperiencia(exp);

        return exp;
    }
}
