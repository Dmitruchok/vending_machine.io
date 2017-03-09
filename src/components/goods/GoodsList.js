import React from 'react'
import Order from '../order/Order'

export default class GoodsList extends React.Component {

  addKilogramGood = (e) => {
    e.preventDefault();
    this.setState({counterKilogram: ++this.props.state.counterKilogram });
  }

  minusKilogramGood = (e) => {
    e.preventDefault();
    this.setState({counterKilogram: --this.props.state.counterKilogram });
  }

  dblClickGood = (e) => {
    e.preventDefault();
    const goodsName = e.target.innerHTML;
    let obj = {name: goodsName};
    this.props.orderList.push(obj);
    // console.log(this.props.orderList);
    // let length = this.props.educationList.length;
  }

  render () {
    const goodsData = this.props.goods;
    return (
      <div className='goods-box'>
        <Order />
        {
          goodsData.map((item, index) => {
            return (
              <div key={index}>
                <span onDoubleClick={this.dblClickGood}>{item.name}</span>
                <span>-{item.price}</span>
                <p onClick={this.addKilogramGood} className='plus-kg'>+</p>
                <p onClick={this.minusKilogramGood} className='minus-kg'>-</p>
                <input type='text' value={this.props.state.counterKilogram}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
