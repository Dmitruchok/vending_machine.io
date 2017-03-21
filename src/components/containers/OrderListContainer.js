import React from 'react'

export default class Order extends React.Component {

  static propTypes = {
    buyGoods: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    buyGoods: []
  };


  render() {
    let data = this.props.buyGoods;

    return(
      <div>
        {
          data.map((item, index) => {
            return(
              <h3 key={index}>{item.name}</h3>
            )
          })
        }
      </div>
    );
  }
}
