package ar.com.portfolio.portfolioweb.Service;


import ar.com.portfolio.portfolioweb.Model.Login;
import ar.com.portfolio.portfolioweb.Repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
public class LoginServices implements ILoginServices {

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public Login encontrarLogin(String email, String password) {
        List<Login> logins = loginRepository.findAll();

        Predicate<Login> byMail = login -> (login.getEmail().equals(email) );
        Predicate<Login> byPassword = login -> (login.getPassword().equals(password) );
        List<Login> result = logins.stream().filter(byMail.and(byPassword)).collect(Collectors.toList());
        if (result.size() > 0)
            return result.get(0);
        return null;
    }

    @Override
    public void crearLogin(Login login) { loginRepository.save(login);}

    @Override
    public void borrarLogin(Long id){loginRepository.deleteById(id);}

    @Override
    public List<Login> getLogins(){ return loginRepository.findAll();}
}
