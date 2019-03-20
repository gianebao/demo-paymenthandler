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

    document.getElementById('paynow').onclick = async function handlePurchase() {
      const paymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);
      try {
        const response = await paymentRequest.show();
        // Process response here, including sending payment instrument
        // (e.g., credit card) information to the server.
        // paymentResponse.methodName contains the selected payment method
        // paymentResponse.details contains a payment method specific response
        await response.complete("success");
      } catch (err) {
        alert("Error:", err.message);
      }
    };
    
}
else {
    alert('PaymentRequest API not supported.');
}
