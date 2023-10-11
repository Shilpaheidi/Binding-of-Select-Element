import { Component } from '@angular/core';



interface  records{
  id:number;
  itemName:string;
  price:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  SelectedItem:any;

  details:records[]=[{id:1,itemName:'Idly',price:20},
  {id:2,itemName:'Dhosa',price:30},
  {id:3,itemName:'Lemon rice',price:22},
  {id:4,itemName:'Biryani',price:60},
  {id:5,itemName:'Tomato rice',price:35}]
}
