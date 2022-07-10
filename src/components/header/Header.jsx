import styles from './Header.module.css'

import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'

function Header () {
  return (
    <div className={styles.header}>
      <Title>Mario Jump</Title>
      <Subtitle>Criado por Ruan Gomes</Subtitle>
    </div>
  )
}

export default Header