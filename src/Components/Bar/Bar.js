import React from 'react'
import styled from 'styled-components'

const Bar = ({ className, name, level }) => {
  return (
    <div className={className}>
      <p className='skill__name' htmlFor={`${name}-bar`}>{name}</p>
      <div id={`${name}-bar`} className='skill__bar'>
        <div className='skill__level'></div>
      </div>
    </div>
  )
}

export default styled(Bar)`
width: 75%;

  .skill__name {
    margin: 0.5em 0;
  }

  .skill__bar {
    width: 100%;
    height: 0.5em;
    padding: 1px;
    opacity: 0.75;
    z-index: 0;
    border-radius: 0.5em;
    background-color: #D0D0D0;
  }

  .skill__level {
    height: 0.5em;
    border-radius: 0.5em;
    background-color: #171717;
    width: ${p => p.level || 0}%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }

   @media screen and (max-width: 600px) {
    .skill__name {
      font-size: 0.8rem;
    }
  } 
`
