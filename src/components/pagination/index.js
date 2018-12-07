import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

class Pagination extends Component {
  render() {
    return (
      <div className='pagination'>
        <div className='nodeList'>
          <Link className='pageNodes' to='/' query={{page: 1}}>1</Link>
          <Link className='pageNodes' to='/' query={{page: 2}}>2</Link>
          <Link className='pageNodes' to='/' query={{page: 3}}>3</Link>
          <Link className='pageNodes' to='/' query={{page: 4}}>4</Link>
          <Link className='pageNodes' to='/' query={{page: 5}}>5</Link>
          <Link className='pageNodes' to='/' query={{page: 6}}>6</Link>
          <Link className='pageNodes' to='/' query={{page: 7}}>7</Link>
          <Link className='pageNodes' to='/' query={{page: 8}}>8</Link>
          <Link className='pageNodes' to='/' query={{page: 9}}>9</Link>
        </div>
      </div>
    )
  }
}

export default Pagination