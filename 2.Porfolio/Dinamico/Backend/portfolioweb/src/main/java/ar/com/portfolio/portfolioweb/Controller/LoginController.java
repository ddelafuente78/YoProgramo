package ar.com.portfolio.portfolioweb.Controller;

import ar.com.portfolio.portfolioweb.Model.Login;
import ar.com.portfolio.portfolioweb.Service.ILoginServices;
import ar.com.portfolio.portfolioweb.Utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
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

    @PostMapping("/auth/crear")
    public String createLogin(@RequestBody Login login){
        interlogin.crearLogin(login);
        return "{\"rpta\":\"Se creo el login de usuario\"}";
    }

    @DeleteMapping("/auth/borrar/{id}")
    public String deleteLogin(@PathVariable Long id){
        interlogin.borrarLogin(id);
        return "{\"rpta\":\"Se borro el Login\"}";
    }
}
