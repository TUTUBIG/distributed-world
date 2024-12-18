import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {WalletService} from '../../web3/wallet.service';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  walletConnectStatus = false
  wallet = new WalletService();

  async loginWithEthereum() {
    const signature = await this.wallet.web3LoginViaMetamask()
    if (!signature) {
      console.log('signature is missing');
    }
    console.log(signature);
    this.walletConnectStatus = true;
  }
}
