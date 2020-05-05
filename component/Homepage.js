const Homepage = () => (
  <div className="wrapper">
    <div className="main">
      <div className="cover"></div>
      <section className="hero is-medium">
        <div className="hero-body has-text-centered	">
          <div className="container">
            <h1 className="title has-text-white has-text-weight-normal">
              Style is forever
            </h1>
          </div>
        </div>
      </section>
    </div>

    <style jsx>{`
      .main {
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
        height: 31rem;
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

      .cover {
        background-color: white;
        margin: 349px 0px 0pxpx 0px;
        padding: 385px 48px 140px 38px;
        position: absolute;
        margin-top: 294px;
      }
    `}</style>
  </div>
);
export default Homepage;
