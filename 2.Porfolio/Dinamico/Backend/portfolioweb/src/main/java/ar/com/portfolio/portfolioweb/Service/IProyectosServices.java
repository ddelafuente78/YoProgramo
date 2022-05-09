package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Proyectos;

import java.util.List;

public interface IProyectosServices {

    public List<Proyectos> getProyectos();

    public void guardarProyecto(Proyectos proy);

    public void borrarProyecto(Long id);

    public Proyectos encontrarProyecto(Long id);
}
