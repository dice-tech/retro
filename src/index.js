import React from 'react'
import styles from './styles.module.css'
import Theme from './Theme'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export {Theme};
