import React from 'react'
import GoodsList from '../goods/GoodsList'

export default class startPage extends React.Component {
  render() {
    return (
      <div className='platform'>
        <div>Platform</div>
        <GoodsList />
      </div>
    )
  }
}
