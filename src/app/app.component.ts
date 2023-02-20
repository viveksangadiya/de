import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  userModel:any={
     userName:'vivek sangadiya',
     email:''
  }
  onSubmit(userform:any){
  
    console.log(userform.value);
    
  }
}
