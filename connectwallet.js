// react-компонент.js
import ReactDOM from 'react-dom';
import React from 'react';
import { ThirdwebProvider, ConnectWallet, metamaskWallet, coinbaseWallet, walletConnect, localWallet, trustWallet, phantomWallet, darkTheme } from "@thirdweb-dev/react";



function ConnectWalletButton() {
    const handleConnect = () => {
        // Ваша логика для подключения кошелька
        alert('Кошелек подключен!');
    };

 

    return (
        
        <ThirdwebProvider
            activeChain="scroll"
            clientId="YOUR_CLIENT_ID"
            locale={en()} 
            supportedWallets={[
                metamaskWallet(),
                coinbaseWallet({ recommended: true }),
                walletConnect(),
                localWallet(),
                trustWallet({ recommended: true }),
                phantomWallet({ recommended: true }),
            ]}
        >
            <ConnectWallet
                theme={darkTheme({
                    colors: {
                        modalBg: "#FDE9D5",
                        dropdownBg: "#FDE9D5",
                        accentText: "#FF664E",
                        accentButtonBg: "#FF664E",
                        primaryText: "#0F0F0F",
                    },
                })}
                modalSize={"wide"}
            />
            <button onClick={handleConnect}>CONNECT WALLET</button>
        </ThirdwebProvider>
    );
}

export default ConnectWalletButton;
