package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Educacion;
import ar.com.portfolio.portfolioweb.Repository.EducacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducacionServices implements IEducacionService {

    @Autowired
    private EducacionRepository educRepository;


    @Override
    public List<Educacion> getEducaciones() {
        List<Educacion> listaEducaciones = educRepository.findAll();
        return listaEducaciones;
    }

     @Override
    public void guardarEducacion(Educacion educ) {
        educRepository.save(educ);
    }

    @Override
    public void borrarEducacion(Long id) {
        educRepository.deleteById(id);

    }

    @Override
    public Educacion encontrarEducacion(Long id) {
        return educRepository.findById(id).orElse(null);
    }
}
