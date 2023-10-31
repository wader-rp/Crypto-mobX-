import { makeAutoObservable } from "mobx";

export type crypto = {
  id: number;
  icon: string;
  name: string;
  prize: string;
};

class CrypoStore {
  cryptos: crypto[] = [];

  constructor() {
    makeAutoObservable(this);
  }
}
const cryptoStore = new CrypoStore();
console.log(cryptoStore.cryptos);
export default cryptoStore;
