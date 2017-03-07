import React from 'react'

export default class OrderBlock extends React.Component {

  static propTypes = {
    orderList: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    orderList: []
  };

  render() {
    let data = this.props.orderList;
    let tmpl = data.map((item, index) => {
      return(
        <h3 key={index}>{item.name}</h3>
      )
    })
    // console.log(data);
    return(
      <div>
        {tmpl}
      </div>
    )
  }
}
