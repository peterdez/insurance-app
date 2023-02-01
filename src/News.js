const News = () => {
    return (
        <>
        <section id="news_section">
            <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <span className="mini-title d-inline-block mb-2">Our News</span>
      <h1 className="text-center mb-4">Latest Health Insurance Posts</h1>
      </div>
      </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="/assets/images/blog_image_1.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">FG to continually evaluate health insurance Minister</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className=""><i className="fa fa-calendar"></i> October 2, 2022</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="/assets/images/blog_image_2.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Private Health</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className=""><i className="fa fa-calendar"></i> October 8, 2022</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="/assets/images/blog_image_3.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Managed Care Plans</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className=""><i className="fa fa-calendar"></i> December 8, 2022</small>
      </div>
    </div>
  </div>
</div>
</div>
</section>
        </>
    );
}

export default News;