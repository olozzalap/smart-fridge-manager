import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ItemService {
  constructor(private http: Http) {
  }

  getItems(): any {
  		// Example using Http service to query a backend service
		// return this.http.get('/api/get-items')
		// 	.map((response: Response) => {
		// 		const data = response.json();
		// 		return data;
		// 	})
		// 	.catch((err) => console.error(err));
	}

}
