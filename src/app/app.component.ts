import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private itemService: ItemService) { }

	newItemName: string;
	newItemType: string;
	newItemFill: number = 1;

	getFillType: string;
	prevGetFillType: string;
	getAvgFillByTypeResult: number;

	getItemsFill: number = .5;
	getItemsResult: Array<any[]>;

  ngOnInit(): void {
  	console.log(this.itemService);
  }
  ngOnDestroy(): void {
  }

  submitNewItem(): void {
  	this.itemService.handleItemAdded(this.newItemType.toLowerCase(), this.newItemName, this.newItemFill);
  	this.newItemType = "";
  	this.newItemName = "";
  	this.newItemFill = 1;
  }
  getAvgFillByType(): void {
  	this.getAvgFillByTypeResult = this.itemService.getFillFactor(this.getFillType.toLowerCase());
  	this.prevGetFillType = this.getFillType;
  	this.getFillType = "";
  }
  getItemsByFill(): void {
  	this.getItemsResult = this.itemService.getItems(this.getItemsFill);
  }
}
