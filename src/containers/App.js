import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <h1>Vending Machine</h1>
        <ul>
          <li><Link to='/startPage'>Please click to buy</Link></li>
        </ul>
        {this.props.children}
      </div>
    )

  }
}
