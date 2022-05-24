package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Experiencia;

import java.util.List;

public interface IExperienciaService {

    List<Experiencia> getExperiencias();

    void guardarExperiencia(Experiencia exp);

    void borrarExperciencia(Long id);

    Experiencia encontrarExperiencia(Long id);
}