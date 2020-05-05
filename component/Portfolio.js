const Portfolio = () => (
  <div className="wrapper">
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <code>
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/1.jpg"></img>
            </code>
          </div>
          <div className="column is-one-fifth">
            <code>
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/2.jpg"></img>
            </code>
          </div>
          <div className="column is-one-two-fifth">
            <code>
              {' '}
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/3.jpg"></img>
            </code>
          </div>
          <div className="column is-half">
            <code>
              {' '}
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/4.jpg"></img>
            </code>
          </div>
          <div className="column is-one-quarter">
            <code>
              {' '}
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/5.jpg"></img>
            </code>
          </div>
          <div className="column is-one-quarter">
            <code>
              {' '}
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/6.jpg"></img>
            </code>
          </div>
          <div className="column is-one-quarter">
            <code>
              {' '}
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/7.jpg"></img>
            </code>
          </div>
          <div className="column is-one-quarter">
            <code>
              {' '}
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/8.jpg"></img>
            </code>
          </div>
          <div className="column">
            {' '}
            <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/9.jpg"></img>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      img {
        border: 10px solid white;
      }
      img:hover {
        opacity: 0.5;
        border: 10px solid black;
        transition: 0.8s ease;
      }
    `}</style>
  </div>
);
export default Portfolio;
