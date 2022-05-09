package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Persona;

import java.util.List;

public interface IPersonaService {

    public List<Persona> getPersonas();

    public void guardarPersona(Persona pers);

    public void borrarPersona(Long id);

    public Persona encontrarPersona(Long id);
}
