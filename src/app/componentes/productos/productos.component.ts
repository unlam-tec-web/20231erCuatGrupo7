import {Component, forwardRef} from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  lista = [
    ["Infinity war ", 200],
    ["Infinity war 2", 250],
    ["Infinity war 3", 300],
    ["Infinity war 4", 500],
    ["Infinity war 5", 320],
    ["Infinity war 6", 550],
  ];

}
