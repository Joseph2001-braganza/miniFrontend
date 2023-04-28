import React, { Component } from 'react'
import './index.css'

export default class TransactionDetails extends Component {
  render(props) {
    return (
        <>
        <div className='description'>
            <div className='PhotoId'> 
                <img className='ProfileImage' src={require('../../Images/Car.png')}></img>
            </div>
            <div className='Details'>
                <div>Name</div>
                <div>Registered Car Number</div>
                <div>State</div>
                <div>Available Balance (in ETH)</div>
            </div>
        </div>
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
            </div>
        </div>
        </>
    )
  }
}
