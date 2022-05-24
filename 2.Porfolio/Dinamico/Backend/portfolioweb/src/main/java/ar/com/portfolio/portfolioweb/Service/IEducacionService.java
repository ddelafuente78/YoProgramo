package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Educacion;

import java.util.List;

public interface IEducacionService {
    List<Educacion> getEducaciones();

    void guardarEducacion(Educacion educ);

    void borrarEducacion(Long id);

    Educacion encontrarEducacion(Long id);
}