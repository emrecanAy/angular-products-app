import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { AlertifyService } from "../services/alertify.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }
  title = "Ürün Listesi"
  filterText = ""
  products : Product[] = [
    {id: 1, name: "Laptop", price: 2780, categoryId: 1, description: "Macbook Pro", imageUrl: "https://images.unsplash.com/photo-1585247226801-bc613c441316?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
    {id: 2, name: "Mouse", price: 260, categoryId: 2, description: "Logitech", imageUrl: "https://images.unsplash.com/photo-1585247226801-bc613c441316?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
    {id: 1, name: "Laptop", price: 2780, categoryId: 1, description: "Macbook Pro", imageUrl: "https://images.unsplash.com/photo-1585247226801-bc613c441316?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
    {id: 2, name: "Mouse", price: 260, categoryId: 2, description: "Logitech", imageUrl: "https://images.unsplash.com/photo-1585247226801-bc613c441316?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
    {id: 1, name: "Laptop", price: 2780, categoryId: 1, description: "Macbook Pro", imageUrl: "https://images.unsplash.com/photo-1585247226801-bc613c441316?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
    {id: 2, name: "Mouse", price: 260, categoryId: 2, description: "Logitech", imageUrl: "https://images.unsplash.com/photo-1585247226801-bc613c441316?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
  ]

  ngOnInit(): void {
  }


  addToCart(product: any){
    this.alertifyService.success(product.name+" added to cart!");
  }

}
