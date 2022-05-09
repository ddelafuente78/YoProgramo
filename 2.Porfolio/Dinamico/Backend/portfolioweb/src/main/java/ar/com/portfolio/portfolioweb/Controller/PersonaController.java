package ar.com.portfolio.portfolioweb.Controller;

import ar.com.portfolio.portfolioweb.Model.Persona;
import ar.com.portfolio.portfolioweb.Service.IPersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonaController {

    @Autowired
    private IPersonaService interPersona;

    @GetMapping("/persona/traer")
    public List<Persona> getPersonas(){
        return interPersona.getPersonas();
    }

    @PostMapping("/persona/crear")
    public String createPersona(@RequestBody Persona pers){
        interPersona.guardarPersona(pers);
        return "Se creo la persona";
    }

    @DeleteMapping ("/persona/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        interPersona.borrarPersona(id);
        return "Se borro la persona";
    }

    @PutMapping ("/persona/editar/{id}")
    public Persona editarPersona(@PathVariable Long id,
                                 @RequestParam ("nombre") String nuevoNombre,
                                 @RequestParam ("apellido") String nuevoApellido,
                                 @RequestParam ("bannerimg") String nuevoBanner,
                                 @RequestParam("foto") String nuevaFoto,
                                 @RequestParam("acercade") String nuevoAcercaDe){

        Persona pers = interPersona.encontrarPersona(id);

        pers.setApellido(nuevoApellido);
        pers.setNombre(nuevoNombre);
        pers.setBannerimg(nuevoBanner);
        pers.setFoto(nuevaFoto);
        pers.setAcercade(nuevoAcercaDe);

        interPersona.guardarPersona(pers);

        return pers;

    }

}
