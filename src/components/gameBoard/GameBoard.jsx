import classNames from 'classnames'
import { useState } from 'react'

import styles from './GameBoard.module.css'
import Icon from '../icon/Icon'
import Document from 'next/document'

function GameBoard ({ mario }) {
  const [jump, setJump] = useState(mario)

  return (
    <div className={styles.gameBoard}>

      <div className={styles.pipe}>
        <Icon iconName="pipe" type="png" width="80px" height="75px" />
      </div>

      <div mario tabIndex={0} onKeyDown={() => setJump(!jump) } className={classNames(
        styles.mario, {
          [styles.jump]: jump
        }
      )}>
        <Icon iconName='mario' type='gif' width='120px' />
      </div>
    </div>
  )
}

export default GameBoard