import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'

import styles from './App.module.scss'

export function App() {

  return (
    <main className={styles.ContentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}