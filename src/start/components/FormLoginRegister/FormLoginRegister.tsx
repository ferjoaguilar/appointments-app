import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useAuth } from '../../../context/AuthProvider'
import supabase from '../../../utils/supabase'
import styles from './FormLoginRegister.module.css'

export const FormLoginRegister = () => {
   
    const {session} = useAuth()

   
    if (!session) {
      return (
        <div className={styles.login}>
          <Auth 
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }} 
            providers={['google']}
          />
        </div>
      )
    }
    else {
      return (<div>Logged in!</div>)
    }

}
