import React, { Component } from 'react'
import Web3Modal from 'web3modal'
import {ethers} from "ethers"
import {CoinbaseWalletSDK} from "@coinbase/wallet-sdk"
import {Link} from "react-router-dom";
import './index.css'

export default class Header extends Component {
  render() {
    const providerOptions={
        coinbasewallet:{
            package:CoinbaseWalletSDK,
            options:{
                appName:"Web3Modal Demo",
                infuraId:{5:"https://goerli.infura.io/v3/0c91c920c9b64e449e4c8bb9d12bce14"}
            }
        }
    }
    
    async function ConnectWallet(){
        try{
            let web3modal=new Web3Modal({
                cacheProvider:false,
                providerOptions,
            })
            const web3ModalInstance=await web3modal.connect();
            const web3ModalProvider=new ethers.providers.Web3Provider(web3ModalInstance);
            console.log(web3ModalProvider)
        }catch(err){
            console.error(err);
        }
    }
    return (
      <div className='header'>
        <div className='header_logo_image'>
            <img className='ImageLogo' src={require('../../Images/logo.png')}></img>
        </div>
        <div className='header_links'><Link to="/">Home</Link></div>
        <div className='header_links'><Link to="transactions">Transactions Details</Link></div>
        <div className='header_links' onClick={ConnectWallet}>Connect Wallet</div>
        <div className='header_links'>Login/SignUp</div>
      </div>
    )
  }
}
