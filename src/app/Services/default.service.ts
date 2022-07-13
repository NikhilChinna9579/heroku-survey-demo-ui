import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../Models/feedback.model';
import { Questions } from '../Models/questions.model';
import { SaveFeedback } from '../Models/saveFeedback.model';
import { Login } from '../Models/login.model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(private http:HttpClient) { }
  getFeed():Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${environment.serverUrl}/getAllFeedbacks`);
  }
  getQuestions():Observable<Questions[]>{
    return this.http.get<Questions[]>(`${environment.serverUrl}/getAllQuestions`);
  }
  getauth(item:Login){
    return this.http.post(`${environment.serverUrl}/loginAdmin`,item);
  }
  saveFeed(item:SaveFeedback){
      return this.http.post<any>(`${environment.serverUrl}/saveFeedback`,item);
  }
}
