package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Educacion;

import java.util.List;

public interface IEducacionService {
    public List<Educacion> getEducaciones();

    public void guardarEducacion(Educacion educ);

    public void borrarEducacion(Long id);

    public Educacion encontrarEducacion(Long id);
}