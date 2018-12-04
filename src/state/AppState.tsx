import axios from 'axios';
import { action, computed, decorate, observable } from 'mobx';
import { Car, Shop } from '../models';

export class AppState {
  public cars: Car[] = [];
  public shops: Shop[] = [];

  public async load() {
    const res = await axios.get<Car[]>('http://localhost:5000/api/cars');
    this.cars = res.data;

    this.shops = [
      { address: '10 street', selected: false },
      { address: '2 street', selected: false }
    ]
  }

  public selectCar(id: string) {
    this.cars = this.cars.map(c => Object.assign({}, c, { selected: c.id === id }));
  }

  get selectedCar() {
    return this.cars.find(c => c.selected);
  }

  public selectShop(address: string) {
    this.shops = this.shops.map(s => Object.assign({}, s, { selected: s.address === address }));
  }

  get selectedShop() {
    return this.shops.find(c => c.selected);
  }
}

decorate(AppState, {
  cars: observable,
  shops: observable,
  load: action,
  selectCar: action,
  selectedCar: computed,
  selectShop: action,
  selectedShop: computed
});