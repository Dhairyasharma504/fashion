const Portfolio = () => (
  <div className="wrapper">
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="image ">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/1.jpg" />
            </div>
          </div>

          <div className="column">
            <div className="image ">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/8.jpg" />
            </div>
          </div>
          <div className="column">
            <div className="image">
              <img src="https://colorlib.com/preview/theme/instylr/img/portfolio/3.jpg " />
            </div>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      .image {
      }
      .image:hover {
        border: 10px solid black;
        transition: 0.5s ease;
      }
    `}</style>
  </div>
);
export default Portfolio;
