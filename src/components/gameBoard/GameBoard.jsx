import styles from './GameBoard.module.css'
import Icon from '../icon/Icon'

function GameBoard () {
  return (
    <div className={styles.gameBoard} >
      <div className={styles.pipe}>
        <Icon iconName="pipe" type="png" width="80px" height="75px" />
      </div>
    </div>
  )
}

export default GameBoard