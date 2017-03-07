import React from 'react'
import GoodsList from '../components/goods/GoodsList'

export default class GoodsListContainer extends React.Component {
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

        this.orderList = [];
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
        this.orderList.push(obj);
        console.log(this.orderList);
        // let length = this.props.educationList.length;
      }

  render () {
      return (
         <GoodsList list={this.state.goods} />
       )
     }
}
