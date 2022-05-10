import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserContent } from './user-content';
import { UserRegister } from './user-register';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  emailId:String='';

  registerURL="http://localhost:8085/api/user/register";
  loginURL="http://localhost:8085/api/user/login";
  postContentURL="http://localhost:8082/api/content/user/addContent";
  getcontentURL="http://localhost:8082/api/content/user/getContent";

  getUserContentURL="http://localhost:8082/api/content/user/getUserContent";

  constructor(private http:HttpClient) { }

  register(data:UserRegister):Observable<UserRegister>
  {
    return this.http.post<UserRegister>(this.registerURL,data);
  }

  login(userEmail:String):Observable<UserRegister>
  {
    return this.http.get<UserRegister>(`${this.loginURL}/${userEmail}`);
  }
  addcontent(data:UserContent):Observable<UserContent>
  {
    return this.http.post<UserContent>(this.postContentURL,data);
  }
  getcontent():Observable<Array<UserContent>>
  {
    return this.http.get<Array<UserContent>>(this.getcontentURL);
  }

  getUserContent(userEmail:String):Observable<UserContent[]>
  {
    return this.http.get<UserContent[]>(`${this.getUserContentURL}/${userEmail}`);
  }
}
