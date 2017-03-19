import React from 'react'

export default class GoodsListContainer extends React.Component {

  render () {
    const data = this.props;
      return (
         <div>
         {
           data.goods.map((item, index) => {
             return (
               <div key={index}>
                 <span onDoubleClick={data.dblClickGood}>{item.name}</span>
                 <span>-{item.price}</span>
                 <p onClick={data.addKilogramGood} className='plus-kg'>+</p>
                 <p onClick={data.minusKilogramGood} className='minus-kg'>-</p>
                 <input type='text' value={data.state.counterKilogram}/>
               </div>
             )
           })
         }
         </div>
       )
     }
}
