package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Educacion;
import ar.com.portfolio.portfolioweb.Model.Experiencia;
import ar.com.portfolio.portfolioweb.Repository.ExperienciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExperienciaServices implements IExperienciaService {

    @Autowired
    private ExperienciaRepository experienciaRepository;

    @Override
    public List<Experiencia> getExperiencias() {
        List<Experiencia> listaExperiencias = experienciaRepository.findAll();
        return listaExperiencias;
    }

    @Override
    public void guardarExperiencia(Experiencia exp) {
        experienciaRepository.save(exp);
    }

    @Override
    public void borrarExperciencia(Long id) {
        experienciaRepository.deleteById(id);
    }

    @Override
    public Experiencia encontrarExperiencia(Long id) {
        return experienciaRepository.findById(id).orElse(null);
    }
}
