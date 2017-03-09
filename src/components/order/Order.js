import React from 'react'

export default class Order extends React.Component {

  render() {
    let orderData = this.props.order;
    // console.log(orderData);
    let tmpl = orderData.map((item, index) => {
      return(
        <h3 key={index}>{item.name}</h3>
      )
    })
    return(
      <div>
        {tmpl}
      </div>
    )
  }
}
