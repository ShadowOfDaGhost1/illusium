import { ThirdwebSDK } from "@thirdweb-dev/sdk"; 

const sdk = new ThirdwebSDK(Scroll);


async function connectWallet() {
  try {
    await sdk.connectWallet();
    console.log("Кошелек Metamask успешно подключен!");
  } catch (error) {
    console.error("Ошибка при подключении кошелька Metamask:", error);
  }
}

document.getElementById("connectButton").addEventListener("click", connectWallet);