import axios from 'axios';
import { action, decorate, observable } from 'mobx';

export class AppState {
  public carListing: Array<{ id: string }> = [];

  public async loadCarList() {
    const res = 
      await axios.get<Array<{ name: string }>>('http://localhost:5000/api/persons');
    
      this.carListing = res.data.map(p => { 
      return { id: p.name };
    });
  }
}

decorate(AppState, {
  carListing: observable,
  loadCarList: action
});

