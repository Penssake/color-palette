import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

class Pagination extends Component {
  render() {
    return (
      <div className='pagination'>
        <div className='nodeList'>
          <Link className='pageNodes' to='/page1'>1</Link>
          <Link className='pageNodes' to='/page2'>2</Link>
          <Link className='pageNodes' to='/page3'>3</Link>
          <Link className='pageNodes' to='/page4'>4</Link>
          <Link className='pageNodes' to='/page5'>5</Link>
          <Link className='pageNodes' to='/page6'>6</Link>
          <Link className='pageNodes' to='/page7'>7</Link>
          <Link className='pageNodes' to='/page8'>8</Link>
          <Link className='pageNodes' to='/page9'>9</Link>
        </div>
      </div>
    )
  }
}

export default Pagination