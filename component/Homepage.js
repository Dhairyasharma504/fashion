const Homepage = () => (
  <div className="wrapper">
    <div className="main">
      <section className="hero is-medium">
        <div className="hero-body has-text-centered	">
          <div className="container">
            <h1 className="title has-text-white has-text-weight-normal is-size-1-mobile">
              Style is forever
            </h1>
            <button className="button is-large">READ ME >></button>
          </div>
        </div>
      </section>
    </div>

    <style jsx>{`
      .main {
        animation-name: test;
        animation-duration: 6s;
        background-size: cover;
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
        font-size: 114px;
        font-family: 'helvetica 65 medium', sans-serif;
        padding-top: 10rem;
      }
      .button {
        border: 3px solid white;
        color: white;
        font-variant: all-small-caps;
        margin: 10px 0px;
        background-color: transparent;
      }
      .button:hover {
        background-color: black;
        color: white;
      }
    `}</style>
  </div>
);
export default Homepage;
