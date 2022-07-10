import styles from './Title.module.css'



function Title (props) {
  return (
    <h1 className={styles.title}>
      {props.children}
    </h1>
  )
}

Title.defaultProps = {
  text: 'Default'
}

export default Title

