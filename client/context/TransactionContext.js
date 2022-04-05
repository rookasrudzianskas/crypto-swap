import React, {useState, useEffect} from 'react';

export const TransactionContext = React.createContext()

let eth

if(typeof window !== 'undefined') {
    eth = window.ethereum
}

const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState();
    const [isLoading, setIsLoading] = useState(false);

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

}



