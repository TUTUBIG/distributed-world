import {Injectable} from '@angular/core';
import {MetaMaskSDK, SDKProvider} from "@metamask/sdk";
import {infuraApiKey} from '../configuration';
import {Buffer} from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
    private metaMaskSDK = new MetaMaskSDK({
    dappMetadata: {
      name: "Distribute World",
      url: window.location.href,
    },
    infuraAPIKey: infuraApiKey,
    // Other options
  })


  private ethereum: SDKProvider | undefined

  async web3LoginViaMetamask(): Promise<Partial<unknown> | null | undefined> {
    if (this.ethereum == undefined) {
      await this.metaMaskSDK.connect()
      this.ethereum = this.metaMaskSDK.getProvider()
    }

    const address = this.ethereum!.getSelectedAddress()
    const domain = window.location.host
    const time = new Date().toString();


    // this.ethereum!.request({
    //   method: 'eth_accounts',
    // }).then((account)=>{
    //   console.log(account)
    // }).catch((err)=>{
    //   console.log(err)
    // })

    // const nonce = await this.ethereum!.request({
    //   method: 'eth_getTransactionCount',
    //   params: [address, 'latest'], // 'latest' to get the current nonce
    // });

    const authorizationMessage = `${domain} wants you to sign in with your Ethereum account:\n${address}\n\nI accept the MetaMask Terms of Service: https://community.metamask.io/tos\n\nURI: https://${domain}\nVersion: 1\nChain ID: 1\nIssued At: ${time}`


    const message = `0x${Buffer.from(authorizationMessage, "utf8").toString("hex")}`
    return await this.ethereum!.request({
      method: "personal_sign",
      params: [message, address],
    })
  }

  constructor() { }
}
