import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   name='Arpan';
   framework='angular';
   uname=new FormControl();
   display(): void
   {
    alert('welcome to angular 16!!!!!')
   }
   updateNames()
   {
     this.uname.setValue("Arpan")
   }
}
