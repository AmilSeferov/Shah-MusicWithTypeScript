import React from 'react'
import MiniPlayerElement from './MiniPlayerElement'
import AutoPlay from './AutoPlay'

function PlayerList({opacity}:{opacity:boolean}) {
  return (
    <div className={(opacity?'hidden':'') + ' flex flex-col grow'}>
       <AutoPlay/>
       <div className='flex flex-col h-[420px] overflow-auto'>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       <MiniPlayerElement/>
       </div>
      
    </div>
  )
}

export default PlayerList