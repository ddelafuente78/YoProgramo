package ar.com.portfolio.portfolioweb.Service;

import ar.com.portfolio.portfolioweb.Model.Login;

public interface ILoginServices {

  Login encontrarLogin(String email, String password);
}
