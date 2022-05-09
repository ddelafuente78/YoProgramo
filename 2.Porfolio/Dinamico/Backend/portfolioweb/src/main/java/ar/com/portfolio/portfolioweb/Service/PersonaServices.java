package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Persona;
import ar.com.portfolio.portfolioweb.Repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaServices implements IPersonaService {

    @Autowired
    private PersonaRepository persoRepository;


    @Override
    public List<Persona> getPersonas() {
        List<Persona> listaPersonas = persoRepository.findAll();
        return listaPersonas;
    }

    @Override
    public void guardarPersona(Persona pers) {
        persoRepository.save(pers);
    }

    @Override
    public void borrarPersona(Long id) {
        persoRepository.deleteById(id);

    }

    @Override
    public Persona encontrarPersona(Long id) {
        return persoRepository.findById(id).orElse(null);
    }
}
