package ar.com.portfolio.portfolioweb.Controller;

import ar.com.portfolio.portfolioweb.Model.Educacion;
import ar.com.portfolio.portfolioweb.Model.Experiencia;
import ar.com.portfolio.portfolioweb.Model.Persona;
import ar.com.portfolio.portfolioweb.Service.IEducacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class EducacionController {

    @Autowired
    private IEducacionService interEducacion;

    @GetMapping("/educacion/traer")
    public List<Educacion> getEducaciones(){
        return interEducacion.getEducaciones();}

    @GetMapping("/educacion/encontrar/{id}")
    public Educacion getEducacion(@PathVariable Long id){
        return interEducacion.encontrarEducacion(id);
    }

    @PostMapping("/educacion/crear")
    public String createEducacion(@RequestBody Educacion educ){
        interEducacion.guardarEducacion(educ);
        return "{\"rpta\":\"Se creo la educacion\"}";
    }

    @DeleteMapping("/educacion/borrar/{id}")
    public String deleteEducacion(@PathVariable Long id){
        interEducacion.borrarEducacion(id);
        return "{\"rpta\":\"Se borro la educacion\"}";
    }

    @PutMapping ("/educacion/editar/{id}")
    public Educacion editarEducacion(@PathVariable Long id,
                                     @RequestParam ("aniodesde") int nuevoAnioDesde,
                                     @RequestParam ("aniohasta") int nuevoAnioHasta,
                                     @RequestParam ("institucion") String nuevaInsitucion,
                                     @RequestParam ("detalle") String nuevoDetalle){

        Educacion educ = interEducacion.encontrarEducacion(id);

        educ.setAniodesde(nuevoAnioDesde);
        educ.setAniohasta(nuevoAnioHasta);
        educ.setInstitucion(nuevaInsitucion);
        educ.setDetalle(nuevoDetalle);

        interEducacion.guardarEducacion(educ);

        return educ;

    }
}
