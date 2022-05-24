package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Proyectos;

import java.util.List;

public interface IProyectosServices {

    List<Proyectos> getProyectos();

    void guardarProyecto(Proyectos proy);

    void borrarProyecto(Long id);

    Proyectos encontrarProyecto(Long id);
}
