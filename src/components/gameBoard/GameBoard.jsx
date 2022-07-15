import { useEffect } from 'react'

import styles from './GameBoard.module.css'
import Icon from '../icon/Icon'
import Document from 'next/document'

function GameBoard () {
  
  
  useEffect(() => { 
  document.addEventListener('keydown', jump) 
  const Mario = async () => {document.querySelector('.mario')}
  }, [])
   
  const jump = () => {
    Mario.className.add('jump');
    
  } 

    
  
  return (
    <div className={styles.gameBoard}>
      <div className={styles.pipe}>
        <Icon iconName="pipe" type="png" width="80px" height="75px" />
      </div>
      <div className={styles.mario}>
        <Icon iconName='mario' type='gif' width='120px' />
      </div>
    </div>
  )
}

export default GameBoard