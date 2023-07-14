import { Alert, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import RazorpayCheckout from 'react-native-razorpay';

export class Payment extends Component {

    onPayment=()=>{
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_locuRaWt3KL2uf', 
            amount: '100',
            name: 'foo',
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software'
            },
            theme: {color: '#F37254'}
          }
          RazorpayCheckout.open(options).then((data: { razorpay_payment_id: any; }) => {
            // handle success
            Alert.alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error: { code: any; description: any; }) => {
            // handle failure
            Alert.alert(`Error: ${error.code} | ${error.description}`);
          });
        }
    
  render() {
     

    return (
      <View>
        <Text>Payment</Text>
        <TouchableOpacity onPress={this.onPayment} >
            <Text>payment</Text>
        </TouchableOpacity>
        </View>
        
    )
  }
}

export default Payment