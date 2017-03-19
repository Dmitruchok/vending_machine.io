// import React from 'react'
//
// export default class Order extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       emptyBoxGoods: true
//     }
//   }
//
//   static propTypes = {
//     order: React.PropTypes.array.isRequired
//   };
//
//   static defaultProps = {
//     order: []
//   };
//
//
//   render() {
//     let data = this.props.order;
//     console.log(this.props);
//
//     let tmpl = data.map((item, index) => {
//       return(
//         <h3 key={index}>{item.name}</h3>
//       )
//     })
//     return(
//       <div>
//         {(data.length ? 'No Goods': tmpl)}
//       </div>
//     )
//   }
// }
