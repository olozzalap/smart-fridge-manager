import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  	console.log(this.itemService);
  }
  ngOnDestroy(): void {
  }
}
