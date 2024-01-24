import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products=[
    {
      name:'Iphone',
      price:'60000',
      stock:'20'
    },
    { name:'RealMe',
    price:'40000',
    stock:'100'
    },
    { name:'Redmi',
    price:'30000',
    stock:'120'
    },
    { name:'Pocco',
    price:'15000',
    stock:'200'
    },
    { name:'Infinix',
    price:'57000',
    stock:'80'
    },
  ]
x: any;

}
