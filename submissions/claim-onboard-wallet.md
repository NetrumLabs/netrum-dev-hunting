# Bounty Submission - Onboard Wallet Integration

## 👤 Contributor
- GitHub: [@SuNewbie](https://github.com/SuNewbie)
- Wallet Address: 0xa43afe542DA134cb2870b12B0a04A2809db74c59

## 🧩 Task
- Integrated wallet onboarding support for Netrum (chainId 7777)

## ✅ What Was Done
- Implemented chain onboarding using `wallet_addEthereumChain` for MetaMask-compatible wallets
- Verified connection to the correct RPC and block explorer

## 💻 Code Example

```javascript
const netrumParams = {
  chainId: '0x1E61', // 7777 in hex
  chainName: 'Netrum',
  nativeCurrency: {
    name: 'Netrum',
    symbol: 'NTR',
    decimals: 18
  },
  rpcUrls: ['https://rpc.netrum.network'],
  blockExplorerUrls: ['https://scan.netrum.network']
};

if (typeof window.ethereum !== 'undefined') {
  window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [netrumParams]
  }).then(() => {
    console.log('Netrum network added successfully!');
  }).catch((error) => {
    console.error('Error adding Netrum:', error);
  });
} else {
  alert('Ethereum wallet not detected!');
}
