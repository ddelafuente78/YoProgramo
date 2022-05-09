package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Experiencia;

import java.util.List;

public interface IExperienciaService {

    public List<Experiencia> getExperiencias();

    public void guardarExperiencia(Experiencia exp);

    public void borrarExperciencia(Long id);

    public Experiencia encontrarExperiencia(Long id);
}