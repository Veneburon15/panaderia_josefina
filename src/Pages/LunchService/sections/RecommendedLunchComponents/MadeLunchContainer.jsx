import React from 'react'
import Item from './Item'

const MadeLunchContainer = ({lunchs}) => {
  return (
    <div className='madeLunchContainer'>
        {lunchs.map(lunch => <Item key={lunch.id} {...lunch}/>)}
    </div>
  )
}

export default MadeLunchContainer