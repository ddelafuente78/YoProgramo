package ar.com.portfolio.portfolioweb.Controller;

import ar.com.portfolio.portfolioweb.Model.Login;
import ar.com.portfolio.portfolioweb.Service.ILoginServices;
import ar.com.portfolio.portfolioweb.Utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RequestMapping("/api/v1")
@RestController
public class LoginController {

    @Autowired
    private ILoginServices interlogin;

    @Autowired
    private JWTUtils jwtUtil;

    @PostMapping("/auth/login")
    public String login(@RequestBody Login login){

        if(interlogin.encontrarLogin(login.getEmail(),login.getPassword()) != null){
            String rpta ="{\"accessToken\":\"" + jwtUtil.createoken(login.getEmail(),login.getPassword()) + "\"}";
            return rpta;
        }
        return "{\"accessToken\":\"usuario incorrecto!\"}";
    }

    @GetMapping("/auth/traer")
    public List<Login> getLogins(){
        return interlogin.getLogins();
    }

    @DeleteMapping("/auth/borrar/{id}")
    public String deleteLogin(@PathVariable Long id){
        interlogin.borrarLogin(id);
        return "{\"rpta\":\"Se borro el Login\"}";
    }

    @PostMapping("/auth/crear")
    public String createLogin(@RequestBody Login login){
        if (login.getPassword().length() < 8) {
            return "{\"rpta\":\"La contraseña debe ser igual o mayor a 8 caracteres\"}";
        }
        interlogin.crearLogin(login);
        return "{\"rpta\":\"Se creo el login de usuario\"}";
    }

}
