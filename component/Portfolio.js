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
