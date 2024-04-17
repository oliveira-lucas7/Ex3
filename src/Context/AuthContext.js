import { createContext, useState } from "react";

export const AuthContext = createContext(0);

export default function AuthProvider({children})
{

    const [logado, setLogado] = useState(false);

    return(
        <AuthContext.Provider value={{logado: logado}}>
            {children}
        </AuthContext.Provider>
    )
}
