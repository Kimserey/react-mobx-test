import { decorate, observable } from 'mobx';

export class AppState {
  public carListing: Array<{ id: string }> = [];

  public loadCarList() {
    this.carListing = [{ id: "1" }, { id: "2" }];
  }
}

decorate(AppState, {
  carListing: observable
});

