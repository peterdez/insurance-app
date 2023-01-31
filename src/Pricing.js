const Pricing = () => {
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
          <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
          <p>This type of health insurance plane your actual medical expense both a reimbursement basis.</p>
          <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">Top-Up Health</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
          <p>This type of health insurance plane your actual medical expense both a reimbursement basis.</p>
          <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-bg-primary border-primary">
          <h4 className="my-0 fw-normal">Fixed Benefit Health</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
          <p>This type of health insurance plane your actual medical expense both a reimbursement basis.</p>
          <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
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