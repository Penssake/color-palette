import React, { Component } from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import Button from '../button'

class Nav extends Component {
  render() {
    return (
      <nav>
        <Button />
        <Link className='navNodes' to='/'>Red</Link>
        <Link className='navNodes' to='/'>Orange</Link>
        <Link className='navNodes' to='/'>Yellow</Link>
        <Link className='navNodes' to='/'>Green</Link>
        <Link className='navNodes' to='/'>Blue</Link>
        <Link className='navNodes' to='/'>Purple</Link>
        <Link className='navNodes' to='/'>Brown</Link>
        <Link className='navNodes' to='/'>Gray</Link>
      </nav>
    )
  }
}

export default Nav