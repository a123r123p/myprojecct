import { Component } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipetest.component.html',
  styleUrls: ['./pipetest.component.css']
})
export class PipetestComponent {
  title='Welcome To Angular'    
  app='MOBILE AND APP DEVELOPMENT'
  v1:number=123.7643268;
  d:Date | any;

  constructor()
  {
    alert('In am constructor!!!!!!')
  }
  

}
