import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ItemService {

	constructor(private http: Http) {}

	items: Array<any> = [
		// Sample Item Format
		// {
		// 	itemType: "grapes",
		// 	itemUUID: "Ebens Grapes-grapes-0",
		// 	name: "Ebens Grapes",
		// 	fillFactor: .676,
		//  tracking: true
		// }
	];

  handleItemRemoved( itemUUID: string ): void {
  	let itemToRemove = this.items.find((item, i) => {
  		return item.itemUUID === itemUUID
  	});
  	console.log(itemToRemove);
  	this.items.splice(this.items.indexOf(itemToRemove), 1);
  	console.log(this.items);
  }
  // itemUUID does not need to passed as it is generated from item.name + '-' + item.itemType + '-' + length of other items of the same itemType (array index)
  handleItemAdded( itemType: string, name: string, fillFactor: number ): void {
  	let lengthOfItemType = this.items.filter((item, i) => {
  		return item.itemType === itemType;
  	}).length;
  	this.items.push({
  		itemType: itemType,
  		itemUUID: name + "-" + itemType + "-" + lengthOfItemType,
  		name: name,
  		fillFactor: fillFactor,
  		tracking: true
  	});
  	console.log(this.items);
  }

  // I was a little confused here if this should return average fillFactor's for all items in a given itemType or simply each matching item as [ itemType, fillFactor ]. I settled on the latter for this implementation.
  getItems(fillFactor: number): Array<any[]> {
		let matchingItems = this.items.filter((item, i) => {
			return item.fillFactor <= fillFactor && item.tracking === true
		});
		return matchingItems.map((item, i) => {
			return [item.itemType, item.fillFactor]
		});
	}

  getFillFactor(itemType: string ): number {
  	let matchingItems = this.items.filter((item, i) => {
			return item.itemType === itemType
		});
		let itemTypeFillSum = matchingItems.reduce((total, item) => {
			return total + item.fillFactor;
		});
		console.log(itemTypeFillSum);
		return itemTypeFillSum / matchingItems.length;
  }

	forgetItem( itemType: string ): void {
		this.items = this.items.map((item, i) => {
			if (item.itemType === itemType) {
				item.tracking = false;
				return item;
			}
			else { return item }
		})
	}
}