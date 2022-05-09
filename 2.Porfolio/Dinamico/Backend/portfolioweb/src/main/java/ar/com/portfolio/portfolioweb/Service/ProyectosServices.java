package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Proyectos;
import ar.com.portfolio.portfolioweb.Repository.ProyectosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProyectosServices implements IProyectosServices {

    @Autowired
    private ProyectosRepository proyRepository;

    @Override
    public List<Proyectos> getProyectos(){
        List<Proyectos> listaProyectos = proyRepository.findAll();
        return listaProyectos;
    }

    @Override
    public void guardarProyecto(Proyectos proy){
        proyRepository.save(proy);
    }

    @Override
    public void borrarProyecto(Long id){
        proyRepository.deleteById(id);
    }

    @Override
    public Proyectos encontrarProyecto(Long id){
        return proyRepository.findById(id).orElse(null);
    }
}
