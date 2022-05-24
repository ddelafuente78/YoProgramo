package ar.com.portfolio.portfolioweb.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private Boolean isSoftSkill;
    private String categoria;
    private String nombre;
    private int porcentaje;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Persona persona;
}
