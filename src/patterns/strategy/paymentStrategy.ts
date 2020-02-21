interface PaymentStrategy {
  process(amount: number): void;
}

enum PaymentMethods {
  CreditCard,
  Paypal,
  BankTransfer
}

class PaypalPayment implements PaymentStrategy {
  process(amount: number): void {
    console.log(`You have payed ${amount} usd with paypal`);
  }
}

class CreditCardPayment implements PaymentStrategy {
  process(amount: number): void {
    console.log(`You have payed ${amount} usd with your credit card`);
  }
}

class BankTransferPayment implements PaymentStrategy {
  process(amount: number): void {
    console.log(`You have payed ${amount} usd with a bank transfer`);
  }
}

class PaymentService {
  pay(paymentMethod: PaymentMethods, amount: number) {
    let paymentStrategy: PaymentStrategy;

    if (paymentMethod === PaymentMethods.BankTransfer) {
      paymentStrategy = new BankTransferPayment();
    } else if (paymentMethod === PaymentMethods.Paypal) {
      paymentStrategy = new PaypalPayment();
    } else {
      paymentStrategy = new CreditCardPayment();
    }

    paymentStrategy.process(amount);
  }
}

const paymentService = new PaymentService();

paymentService.pay(PaymentMethods.CreditCard, 50000);
