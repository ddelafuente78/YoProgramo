package ar.com.portfolio.portfolioweb.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private int aniodesde;
    private int aniohasta;
    private String empresa;
    private String detalle;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Persona persona;
}
