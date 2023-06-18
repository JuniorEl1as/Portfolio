import { createContext, useState } from 'react';

export type MeuContext = {
    botaoMenuAtivo: string;
    setBotaoMenuAtivo: (value: string) => void;
};

const AuthContext = createContext<MeuContext>({} as MeuContext);

const AuthContextProvedor = ({ children }: any ) => {

    const [botaoMenuAtivo, setBotaoMenuAtivo] = useState("Home")

    return (
        <AuthContext.Provider
            value={{
                botaoMenuAtivo,
                setBotaoMenuAtivo,
            }}>

            {children}

        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvedor };