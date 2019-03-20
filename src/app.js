if (window.PaymentRequest) {
    const supportedPaymentMethods = 
      [
        {
          supportedMethods: ['basic-card']
        }
      ];
    
    const paymentDetails = {
      total: {
        label: 'Total Cost',
        amount: {
          currency: 'SGD',
          value: 0.01
        }
      }
    }

    const options = {}

    const paymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);

    paymentRequest.show()
    .then(payment => console.log(payment))
    .catch(error => console.error(error));
}
else {
    alert('PaymentRequest API not supported.');
}
