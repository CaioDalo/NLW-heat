import { useContext, useState, FormEvent } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import styles from './style.module.scss'

export function SendMessageForm() {
    const { user, signOut } = useContext(AuthContext)
    const [message, setMessage] = useState('')

    async function handleSetMessage(event: FormEvent) {
        event.preventDefault()

        if(!message.trim()) { 
            return
        }

        await api.post('messages', { message })

        setMessage('')
    }

    return (
        <div className={styles.sendMessageFormWrapper}>
            <button onClick={signOut} className={styles.signOutButton}>
                <VscSignOut size='30'/>
            </button>

            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img src={user?.avatar_url} alt={user?.name} />
                </div>
                <strong className={styles.userName}>{user?.name}</strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted size='16'/>
                    {user?.login}
                </span>
            </header>

            <form onSubmit={handleSetMessage} className={styles.sendMessageForm}>
                <label htmlFor="message">Mensagem</label>

                <textarea onChange={event => setMessage(event.target.value)}
                value={message}
                name="message" 
                id="message"
                placeholder='Qual sua espectativa para o evento ?' />

                <button type='submit'>Enviar mesagem</button>
            </form>
        </div>
    )
}
