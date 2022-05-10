import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataRequestService } from '../data-request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder,private dataService:DataRequestService,private router:Router) {}

  registerForm = this.fb.group({
    userEmail: ["", Validators.required],
    userName: [null, Validators.required],
    userPassword: [null, Validators.required]
  });

  onSubmit(): void {
    const data=this.registerForm.value;
   this.dataService.register(data).subscribe(()=>{
     this.router.navigate(['/login']);
   })
  }
}
