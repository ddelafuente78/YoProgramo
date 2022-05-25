package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Experiencia;
import ar.com.portfolio.portfolioweb.Model.Login;

import java.util.List;

public interface ILoginServices {

  Login encontrarLogin(String email, String password);

  void crearLogin(Login login);

  void borrarLogin(Long id);

  List<Login> getLogins();

}
