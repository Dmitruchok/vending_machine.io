import React from 'react'
import OrderListContainer from '../containers/OrderListContainer'
import GoodsListContainer from '../containers/GoodsListContainer'

export default class GoodsList extends React.Component {

  constructor() {
    super();
    this.state = {
      counterKilogram: 0,
      orderList: []
    };

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

        this.newOrderList = [];
      }

  addKilogramGood = (e) => {
    e.preventDefault();
    this.setState({counterKilogram: ++this.state.counterKilogram });
  }

  minusKilogramGood = (e) => {
    e.preventDefault();
    this.setState({counterKilogram: --this.state.counterKilogram });
  }

  dblClickGood = (e) => {
    e.preventDefault();
    const goodsName = e.target.innerHTML;
    let obj = {name: goodsName};
    let j = {id: 5};
    this.newOrderList.push(obj);
    this.setState({orderList: this.newOrderList});
    let newObject = Object.assing(obj, j);
    console.log(newObject);
    console.log(this.state.orderList);
    // let a = this.newOrderList.map((item) => {
    //   return (
    //     Object.assing(item, this.goods.forEach((item) => {return(item)}))
    //   )
    // });
    // console.log(a);
  }

  render () {
    return (
      <div className='goods-box'>
        <OrderListContainer orderList={this.orderList} buyGoods={this.state.orderList}/>
        <GoodsListContainer
          goods={this.goods}
          state={this.state}
          addKilogramGood={this.addKilogramGood}
          minusKilogramGood={this.minusKilogramGood}
          dblClickGood={this.dblClickGood}
        />
      </div>
    )
  }
}
