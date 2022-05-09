package ar.com.portfolio.portfolioweb.Controller;

import ar.com.portfolio.portfolioweb.Model.Proyectos;
import ar.com.portfolio.portfolioweb.Service.IProyectosServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProyectosController {

    @Autowired
    private IProyectosServices interProyecto;

    @GetMapping("/proyecto/traer")
    public List<Proyectos> getProyectos(){return interProyecto.getProyectos();}

    @PostMapping("/proyecto/crear")
    public String createProyecto(@RequestBody Proyectos proy){
        interProyecto.guardarProyecto(proy);
        return "Se creo el proyecto";
    }

    @DeleteMapping("/proyecto/borrar/{id}")
    public String deleteProyecto(@PathVariable Long id){
        interProyecto.borrarProyecto(id);
        return "Se borro el Proyecto";
    }

    @PutMapping("/proyecto/editar/{id}")
    public Proyectos editarProyectos(@PathVariable Long id,
                                     @RequestParam("nombre") String nuevoNombre,
                                     @RequestParam("descripcion") String nuevaDescripcion,
                                     @RequestParam("aniodesde") int nuevoAnioDesde,
                                     @RequestParam("aniohasta") int nuevoAnioHasta){

        Proyectos proy = interProyecto.encontrarProyecto(id);

        proy.setNombre(nuevoNombre);
        proy.setDescripcion(nuevaDescripcion);
        proy.setAniodesde(nuevoAnioDesde);
        proy.setAniohasta(nuevoAnioHasta);

        interProyecto.guardarProyecto(proy);

        return proy;
    }
}
