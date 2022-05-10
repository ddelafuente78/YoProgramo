package ar.com.portfolio.portfolioweb.Controller;

import ar.com.portfolio.portfolioweb.Model.Educacion;
import ar.com.portfolio.portfolioweb.Model.Experiencia;
import ar.com.portfolio.portfolioweb.Service.IEducacionService;
import ar.com.portfolio.portfolioweb.Service.IExperienciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ExperienciaController {

    @Autowired
    private IExperienciaService interExperiencia;

    @GetMapping("/experiencia/traer")
    public List<Experiencia> getExperiencias(){
        return interExperiencia.getExperiencias();
    }

    @PostMapping("/experiencia/crear")
    public String createExperiencia(@RequestBody Experiencia exp){
        interExperiencia.guardarExperiencia(exp);
        return "Se creo la experiencia";
    }

    @DeleteMapping("/experiencia/borrar/{id}")
    public String deleteExperiencia(@PathVariable Long id){
        interExperiencia.borrarExperciencia(id);
        return "Se borro la experiencia";
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
        exp.setNombreEmpresa(nuevaEmpresa);
        exp.setDetalle(nuevoDetalle);

        interExperiencia.guardarExperiencia(exp);

        return exp;

    }
}
