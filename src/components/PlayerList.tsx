import React from 'react'
import MiniPlayerElement from './MiniPlayerElement'
import AutoPlay from './AutoPlay'

function PlayerList() {
  return (
    <div>
       <AutoPlay/>
       <div>
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