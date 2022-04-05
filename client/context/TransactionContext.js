import React, {useState, useEffect} from 'react';

export const TransactionContext = React.createContext()

let eth

if(typeof window !== 'undefined') {
    eth = window.ethereum
}

export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState();
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Checks if MetaMask is installed and an account is connected
     * @param {*} metamask Injected MetaMask code from the browser
     * @returns
     */
    const checkIfWalletIsConnected = async (metamask = eth) => {
        try {
            if (!metamask) return alert('Please install metamask ')

            const accounts = await metamask.request({ method: 'eth_accounts' })

            if (accounts.length) {
                setCurrentAccount(accounts[0])
            }
        } catch (error) {
            console.error(error)
            throw new Error('No ethereum object.')
        }
    }

    const connectWallet = async (metamask = eth) => {
        try {
            if(!metamask) return alert('Please install MetaMask');
            const accounts = await metamask.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        } catch(error) {
            console.log(error)
            throw new Error('No ethereum object.')
        }
    }

    return (
        <TransactionContext.Provider
            value={{
                currentAccount,
                connectWallet,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )

}



