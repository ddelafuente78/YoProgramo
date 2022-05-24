package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Persona;

import java.util.List;

public interface IPersonaService {

    List<Persona> getPersonas();

    void guardarPersona(Persona pers);

    void borrarPersona(Long id);

    Persona encontrarPersona(Long id);
}
