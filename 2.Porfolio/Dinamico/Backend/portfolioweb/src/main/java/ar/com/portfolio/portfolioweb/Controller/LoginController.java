package ar.com.portfolio.portfolioweb.Controller;

import ar.com.portfolio.portfolioweb.Model.Login;
import ar.com.portfolio.portfolioweb.Service.ILoginServices;
import ar.com.portfolio.portfolioweb.Utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    private ILoginServices interlogin;

    @Autowired
    private JWTUtils jwtUtil;

    @PostMapping("/auth")
    public String login(@RequestBody Login login){

        if(interlogin.encontrarLogin(login.getEmail(),login.getPassword()) != null)
                return jwtUtil.createoken(login.getEmail(),login.getPassword());
        return "Login incorrecto";
    }
}
