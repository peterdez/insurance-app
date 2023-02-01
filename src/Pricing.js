import { PaystackButton } from 'react-paystack';

const basicConfig = {
  email: "user@example.com",
  amount: 200000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: 'pk_test_f5bd823de52f3b1245ccce6a8a8c42dcda06ded8',
};

const proConfig = {
  email: "user@example.com",
  amount: 300000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: 'pk_test_f5bd823de52f3b1245ccce6a8a8c42dcda06ded8',
};

const eliteConfig = {
  email: "user@example.com",
  amount: 400000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: 'pk_test_f5bd823de52f3b1245ccce6a8a8c42dcda06ded8',
};

const Pricing = () => {

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
      alert("Thanks for doing business with us! Come back soon!!")
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const basicComponentProps = {
      ...basicConfig,
      text: 'Buy This Policy',
      onSuccess: handlePaystackSuccessAction,
      onClose: handlePaystackCloseAction,
  };

  const proComponentProps = {
    ...proConfig,
    text: 'Buy This Policy',
    onSuccess: handlePaystackSuccessAction,
    onClose: handlePaystackCloseAction,
};

const eliteComponentProps = {
  ...eliteConfig,
  text: 'Buy This Policy',
  onSuccess: handlePaystackSuccessAction,
  onClose: handlePaystackCloseAction,
};
    return (
        <>
        <section id="pricing_section">
    <div className="container">
    <div className="row">
      <div className="col-12 text-center">
      <span className="mini-title d-inline-block mb-2">Live Your Dream</span>
      <h1 className="text-center mb-4">Best Health Insurance Plans</h1>
      </div>
    </div>
  <div className="row row-cols-1 row-cols-md-3 text-center">
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">Indemnity Health</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">₦2000<small className="text-muted fw-light">/mo</small></h1>
          <p>This type of health insurance plane your actual medical expense both a reimbursement basis.</p>
          <PaystackButton className="w-100 btn btn-lg btn-primary" {...basicComponentProps} />
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">Top-Up Health</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">₦3000<small className="text-muted fw-light">/mo</small></h1>
          <p>This type of health insurance plane your actual medical expense both a reimbursement basis.</p>
          <PaystackButton className="w-100 btn btn-lg btn-primary" {...proComponentProps} />
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-bg-primary border-primary">
          <h4 className="my-0 fw-normal">Fixed Benefit Health</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">₦4000<small className="text-muted fw-light">/mo</small></h1>
          <p>This type of health insurance plane your actual medical expense both a reimbursement basis.</p>
          <PaystackButton className="w-100 btn btn-lg btn-primary" {...eliteComponentProps} />
        </div>
      </div>
    </div>
  </div>
  </div>
  </section>
        </>
    );
}

export default Pricing;