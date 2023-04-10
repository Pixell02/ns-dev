import React from 'react'
import { Link } from 'react-router-dom'
import "./itemLink.css"

export default function ItemLink(props) {
  return (
    <Link to={props.link}>
    <div className='d-flex item-name animated-text'>
      {props.name}
    </div>
    </Link>
  )
}
