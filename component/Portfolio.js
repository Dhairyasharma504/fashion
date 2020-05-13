const Portfolio = () => (
  <div className="wrapper">
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          <div className="column is-one-third">
            <div className="image ">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/1.jpg" />
            </div>
          </div>

          <div className="column is-one-third">
            <div className="image ">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/8.jpg" />
            </div>
          </div>
          <div className="column is-one-third">
            <div className="image">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/3.jpg " />
            </div>
          </div>
          <div className="column is-4">
            <div className="image">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/4.jpg " />
            </div>
          </div>
          <div className="column is-4">
            <div className="image">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/5.jpg " />
            </div>
          </div>
          <div className="column is-4">
            <div className="image">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/6.jpg " />
            </div>
          </div>
          <div className="column is-4 ">
            <div className="image">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/4.jpg " />
            </div>
          </div>
          <div className="column is-4 ">
            <div className="image">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/5.jpg " />
            </div>
          </div>
          <div className="column is-4">
            <div className="image">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/6.jpg " />
            </div>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      .image {
        border: 10px solid white;
        border: 10px solid white;
      }
      .image:hover {
        opacity: 0.5;
        border: 10px solid black;
        transition: 0.9s ease;
      }
    `}</style>
  </div>
);
export default Portfolio;
