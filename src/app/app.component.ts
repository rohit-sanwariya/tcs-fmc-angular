import { Component, inject } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   _firebase = inject(FirebaseService);
  message: any;

  constructor(){
    this._firebase.requestPermission();
    this._firebase.receiveMessage();
    this.message = this._firebase.currentMessage$;
  }



}
