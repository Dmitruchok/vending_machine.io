import React from 'react'
import GoodsList from '../goods/GoodsList'

export default class startPage extends React.Component {
  render() {
    console.log(this.orderList);
    return (
      <div className='platform'>
        <div>Platform</div>
        <GoodsList />
      </div>
    )
  }
}
