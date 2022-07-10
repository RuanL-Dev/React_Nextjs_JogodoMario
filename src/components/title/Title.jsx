import styles from './Title.module.css'

function Title ({ children }) {
  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  )
}

Title.defaultProps = {
  text: 'Default'
}

export default Title

