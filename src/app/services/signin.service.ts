import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SigninService{
  messages: string[] = [];

  addMessage(message: string){
    this.messages.push(message);
  }

  clearMessage(){
    this.messages = [];
  }

}
