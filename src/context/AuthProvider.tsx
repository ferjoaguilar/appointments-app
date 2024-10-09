import { Session } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import supabase from "../utils/supabase";

interface IAuthContextType{
    session: Session | null
    signIn: () => void
    signOut: () => void
}

const AuthContext = createContext<IAuthContextType | undefined>(undefined)

export const AuthProvider = ({children}:{children: ReactNode}) => {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
      const getSession = async() => {
        const {data: {session}} = await supabase.auth.getSession()
        setSession(session)
      }

      getSession()

      const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => {
        subscription.unsubscribe()
      }
    
     
    }, [])
    
    const signIn = async () => {
        // pendiente
    }

    const signOut = async() => {
        await supabase.auth.signOut()
        setSession(null)
    }

    return (
        <AuthContext.Provider value={ {session, signIn, signOut} }>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined){
        throw new Error('Authcontext not working')
    }

    return context
}