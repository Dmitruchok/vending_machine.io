import React from 'react'
import Order from '../order/Order'

export default class GoodsList extends React.Component {
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
    const goodsData = this.goods;
    // const tmpl = goodsData.map((item, index) => {
    //   return (
    //     <div key={index}>
    //       <span onDoubleClick={this.dblClickGood}>{item.name}</span>
    //       <span>-{item.price}</span>
    //       <p onClick={this.addKilogramGood} className='plus-kg'>+</p>
    //       <p onClick={this.minusKilogramGood} className='minus-kg'>-</p>
    //       <input type='text' value={this.state.counterKilogram}/>
    //     </div>
    //   )
    // })
    return (
      <div className='goods-box'>
        <Order orderList={this.orderList}/>
        {
          goodsData.map((item, index) => {
            return (
              <div key={index}>
                <span onDoubleClick={this.dblClickGood}>{item.name}</span>
                <span>-{item.price}</span>
                <p onClick={this.addKilogramGood} className='plus-kg'>+</p>
                <p onClick={this.minusKilogramGood} className='minus-kg'>-</p>
                <input type='text' value={this.state.counterKilogram}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
