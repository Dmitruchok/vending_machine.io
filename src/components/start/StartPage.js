import React from 'react'
import GoodsList from '../goods/GoodsList'
import Order from '../order/Order'

export default class startPage extends React.Component {
  constructor() {
    super();
    this.state = {
      counterKilogram: 0
    }

    this.goods = [
          {
            id: 0,
            name: 'Apple',
            price: '40 UH/KG'
          },
          {
            id: 1,
            name: 'Mandarin',
            price: '20 UH/KG'
          },
          {
            id: 2,
            name: 'Orange',
            price: '80 UH/KG'
          },
          {
            id: 3,
            name: 'Pear',
            price: '100 UH/KG'
          }
        ];

        this.orderList = ['no'];
      }
  render() {
    // console.log(this.orderList);
    return (
      <div className='platform'>
        <div>Platform</div>
        <Order order={this.orderList} />
        <GoodsList goods={this.goods} state={this.state} orderList={this.orderList}/>
      </div>
    )
  }
}
