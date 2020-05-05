const Homepage = () => (
  <div className="wrapper">
    <section className="section">
      <div className="columns">
        <div className="column cover is-1 ">
          <div className="cover1">
            <span>
              <i className="fab fa-amazon"></i>
            </span>{' '}
            <span>
              <i className="fab fa-facebook"></i>
            </span>
            <span>
              <i className="fab fa-angrycreative"></i>
            </span>
            <span>
              <i className="fab fa-angellist"></i>
            </span>
            <div className="subtitle is-size-7 has-text-gray is-uppercase has-text-weight-semibold is-spaced">
              FOLLOW US
            </div>
          </div>
        </div>
        <div className="column">
          <div className="container has-text-centered">
            <h1 className="title has-text-white has-text-weight-normal ">
              Style is forever
            </h1>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      .section {
        animation-name: test;
        animation-duration: 6s;
        animation-iteration-count: infinite;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.02),
            rgba(218, 173, 165, 0.29)
          ),
          url(https://colorlib.com/preview/theme/instylr/img/slider/1.jpg);

        background-repeat: no-repeat;
        background-position: center top;
      }

      @keyframes test {
        0% {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.02),
              rgba(218, 173, 165, 0.29)
            ),
            url(https://colorlib.com/preview/theme/instylr/img/slider/1.jpg);
        }
        25% {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.02),
              rgba(0, 0, 14, 0)
            ),
            url(' https://colorlib.com/preview/theme/instylr/img/slider/2.jpg');
        }
      }

      .container {
        background: ;
        position: relative;
        animation-name: example;
        animation-duration: 5s;
        animation-fill-mode: forwards;
        height: 40rem;
      }

      @keyframes example {
        from {
          top: 200px;
          opacity: 0;
        }
        to {
          top: 0px;
        }
      }
      .title {
        margin-top: 2rem;
        font-size: 94px;
        font-family: 'helvetica 65 medium', sans-serif;
        padding-top: 10rem;
      }
      .cover1 {
        display: inline-grid;
      }
      .cover {
        background-color: white;
        position: absolute;
        padding: 62px 38px 137px 17px;
        margin: 21rem 0rem 0rem -1rem;
      }
      span {
        padding: 16px;
      }
    `}</style>
  </div>
);
export default Homepage;
