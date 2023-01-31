const HowItWorks = () => {
    return (
        <section id="how_it_works_section">
            <div className="container">
            <h1 className="text-center mb-4">How It Works</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card text-center h-100">
      <i className="fa fa-user-o fs-1"></i>
      <div className="card-body">
        <h5 className="card-title">Compare personalized quotes</h5>
        <p className="card-text">Answer a couple of questions, we'll provide accurate live quotes.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card text-center h-100">
    <i className="fa fa-pencil-square-o fs-1"></i>
      <div className="card-body">
        <h5 className="card-title">Get all discounts in one place</h5>
        <p className="card-text">Answer a couple of questions, we'll provide accurate live quotes.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center h-100">
    <i className="fa fa-credit-card fs-1"></i>
      <div className="card-body">
        <h5 className="card-title">Buy online or on the phone</h5>
        <p className="card-text">Answer a couple of questions, we'll provide accurate live quotes.</p>
      </div>
    </div>
  </div>
  </div>
  </div>
        </section>
    );
}

export default HowItWorks;