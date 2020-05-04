const Homepage = () => (


<div className="wrapper">
<div className="main"></div>

<style jsx>{`

.main {

  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  background-image: url(https://colorlib.com/preview/theme/instylr/img/slider/1.jpg);
  height: 40rem;
  background-repeat: no-repeat;
  background-position: center top;
}

@keyframes example {
  0%   {background-image: url(https://colorlib.com/preview/theme/instylr/img/slider/1.jpg);
}
  25%  {background-image: url(https://colorlib.com/preview/theme/instylr/img/slider/2.jpg);}
  
}
        `}</style>

    
</div>

);
export default Homepage;