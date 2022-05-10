import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataRequestService } from '../data-request.service';
import { UserContent } from '../user-content';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  constructor(private fb:FormBuilder,private dataRequest:DataRequestService) {}
  hasUnitNumber=false;
  addcontent=false;

  data2:Array<UserContent>=[];

  AddContentForm = this.fb.group({
    contentID:new Date().getTime().toString,
    userEmail:  this.dataRequest.emailId,
    contentTitle:  ["", Validators.required],
    userContent: ["", Validators.required]})

    onSubmit():void{

      const data=this.AddContentForm.value;
      this.dataRequest.addcontent(data).subscribe(()=>{
        this.hasUnitNumber = false;
      })
    }

    onclick(): void {
      // this.dataRequest.getcontent().subscribe(data=>{
      //   this.data2=data;
      //   this.hasUnitNumber = true;
      // })
      this.dataRequest.getUserContent(this.dataRequest.emailId).subscribe(data=>{
        this.data2=data;
        this.hasUnitNumber = true;
      })
    }
}
