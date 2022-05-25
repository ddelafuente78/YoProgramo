import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/Servicios/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  credencialesincorrectas: boolean=false;


  constructor(private formbuilder: FormBuilder, private router: Router, private autenticacionservice:AutenticacionService) {
    this.form = this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]

    })
   }

  ngOnInit(): void {
  }

  get email(){
    return this.form.get("email");
  }

  get password(){
    return this.form.get("password");
  }
  
  onLogin(event:Event){

    event.preventDefault;
    this.autenticacionservice.login(this.form.value).subscribe(rsta => {
      console.log("rsta: " + JSON.stringify(rsta));
      this.verificarToken(rsta) 
    })
  }

  verificarToken(rsta: any){
    if(rsta.accessToken != "usuario incorrecto!"){
      this.credencialesincorrectas = false;
      this.router.navigate(['/principal']);
    }else{
      this.credencialesincorrectas = true;
    }
  }

}
