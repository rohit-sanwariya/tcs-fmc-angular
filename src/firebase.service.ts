import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {AngularFireMessaging} from '@angular/fire/compat/messaging';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  currentMessage$ = new BehaviorSubject<any>(null);
  constructor(
    private _ngFireMessaging : AngularFireMessaging
  ) { }

  requestPermission():void{
    this._ngFireMessaging.requestToken.subscribe({
      next:(token)=>{
        console.log(token)
      },
      error:(err)=>{
        console.error(err);
        
      }
    });
  }

  receiveMessage():void{
    this._ngFireMessaging.messages.subscribe({
      next:(value)=>{
        console.log(value);  
        this.currentMessage$.next(value);      
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }


}
