import React from 'react'

export default class Order extends React.Component {

  // static propTypes = {
  //   order: React.PropTypes.array.isRequired
  // };
  //
  // static defaultProps = {
  //   order: []
  // };


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
