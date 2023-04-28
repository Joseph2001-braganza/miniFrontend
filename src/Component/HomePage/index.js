import React, { Component } from 'react'
import './index.css'

export default class HomePage extends Component {
  render() {
    return (
        <>
        <div className='Description'>
            <div className='Left-Description'>
                <img className='TitleLogo' src={require('../../Images/MineTOLLBLOCK.jpg')}></img>
            </div>
            <div className='Right-Description'>
            A toll-based system on blockchain is a digital payment system that uses blockchain technology to securely and transparently process toll transactions. This system eliminates the need for physical tollbooths and cash payments, making toll payment faster and more convenient for drivers. Each toll transaction is recorded on the blockchain, ensuring that it is tamper-proof and can be easily audited. The system also allows for easy integration with different payment methods, making it accessible to a wider range of users.
            </div>
        </div>

        <div className='Register'>
            <h4>Join our community of secure toll payers and register today</h4>
            <div className='Register-Body'>
                <div className='Register-Left'>
                New User
                <button>Click Here</button>
                </div>
                <div className='Register-Right'>
                    Already Existing User
                    <button>Howdy! Click Here</button>
                </div>
            </div>
        </div>
        <h4>Live Transactions Over Our Decenteralized Network</h4>
        <div className='Transaction_History'>
            <div className='Transaction_block'>
                <div>Transaction ID: 1</div>
                <div>Toll Plaza: NH-71B</div>
                <div>From 0x3eadf1aab8660389a23bccbbded1016b27f29ccff2967f7f852630be2d1c71b6</div>
                <div>To   0xe688b84b23f322a994a53dbf8e15fa82cdb71127</div>
            </div>
            <div className='Transaction_block'>
                <div>Transaction ID: 2</div>
                <div>Toll Plaza: NH-64</div>
                <div>From 0x3eadf1aab8660389a23bccbbded1016b27f29ccff2967f7f852630be2d1c698R</div>
                <div>To   0xe688b84b23f322a994a53dbf8e15fa82cdb71127</div>
            </div>
            <div className='Transaction_block'>
                <div>Transaction ID: 3</div>
                <div>Toll Plaza: NH-99</div>
                <div>From 0x8eadf1bccb660389a23bccbbded1016b27f29ccff2967f7f852630be2d1c69AB</div>
                <div>To   0xe688b84b23f322a994a53dbf8e15fa82cdb71127</div>
            </div>
        </div>
        </>
    )
  }
}
