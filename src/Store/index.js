import { makeAutoObservable } from 'mobx'
import { fetchBtcPrice } from '../utils'

class Store {
  price = 0
  dateUpdated

  constructor() {
    makeAutoObservable(this)
    setInterval(async () => {
      const price = await fetchBtcPrice()
      this.setPrice(price)
    }, 2000)
  }

  setPrice(price) {
    this.price = price
    this.dateUpdated = new Date()
  }
}

export default new Store()
