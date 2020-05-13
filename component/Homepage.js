const Homepage = () => (
  <div className="wrapper">
    <section className="section">
      <div className="columns">
        <div className="column cover is-1">
          <div className="subtitle is-size-7 has-text-gray is-uppercase has-text-weight-semibold">
            FOLLOW US ON SOCIAL MEDIA
          </div>
          <div className="icon1">
            <div className="icon has-text-black">
              <i className="fab fa-pinterest "></i>
            </div>
            <div className="icon has-text-black">
              <i className="fab fa-twitter "></i>
            </div>

            <div className="icon has-text-black">
              <i className="fab fa-facebook-f "></i>
            </div>
            <div className="icon has-text-black">
              <i className="fab fa-behance"></i>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="container has-text-centered">
            <h1 className="title has-text-white has-text-weight-normal is-size-1-mobile ">
              Style is forever
            </h1>

            <button className="button is-large">READ ME >></button>
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
        height: 42rem;
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
        margin-top: 8rem;
        font-size: 110px;
        font-family: 'helvetica 65 medium', sans-serif;
        padding-top: 11rem;
      }
      .cover1 {
      }
      .cover {
        position: absolute;
        left: 0;
        background: #fff;
        transform: rotate(-90deg);
        -webkit-transform-origin: left top;
        margin-top: 42rem;
        width: 26rem;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .button {
        border: 2px solid white;
        background-color: transparent;
        font-size: 19px;
        color: white;
        font-variant: all-small-caps;
      }
      .button:hover {
        color: white;
        background-color: black;
        border: 2px solid white;
      }
      .icon {
        padding: 0px 11px 23px 36px;
        display: inline-table;
      }

      .icon1 {
        margin-left: 147px;
        display: flex;

        margin-top: -41px;
      }
    `}</style>
  </div>
);
export default Homepage;
