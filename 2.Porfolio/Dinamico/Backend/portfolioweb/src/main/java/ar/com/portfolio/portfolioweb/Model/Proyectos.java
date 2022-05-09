package ar.com.portfolio.portfolioweb.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
public class Proyectos {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nombre;
    private String descripcion;
    private int aniodesde;
    private int aniohasta;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Persona persona;
}
