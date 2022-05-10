import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardGuard } from '../auth-guard.guard';
import { AuthServiceService } from '../auth-service.service';
import { DataRequestService } from '../data-request.service';
import { UserRegister } from '../user-register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    userEmail: ["", Validators.required],
    userPassword: ["", Validators.required]
  });

  data2:Array<UserRegister>=[];

  constructor(private fb: FormBuilder,private router:Router,private dataRequest:DataRequestService,private activated:ActivatedRoute,private authServe:AuthServiceService) {}

  onSubmit(): void {

    const data1=this.loginForm.value;
    this.dataRequest.login(data1.userEmail).subscribe(data=>{
      if(data1.userEmail==data.userEmail&&data1.userPassword==data.userPassword)
       {
        this.authServe.logIn();
        this.dataRequest.emailId=data.userEmail;
        this.router.navigate(["/dashboard"]);
       }
       else
       {
        console.error("Email or Password incorrect");
        this.router.navigate(["/register"]);
       }
    })
  // })
}
}
