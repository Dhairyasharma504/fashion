const Homepage = () => (


<div className="wrapper">
<div className="main">

<section className="hero is-large is-bold">
  <div className="hero-body has-text-centered	">
    <div className="container">
      <h1 className="title is-size-1 has-text-white">
        Primary bold title
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
  background-image: url(https://colorlib.com/preview/theme/instylr/img/slider/1.jpg);
  
  background-repeat: no-repeat;
  background-position: center top;
}

@keyframes test {
  0%   {background-image: url(https://colorlib.com/preview/theme/instylr/img/slider/1.jpg);
}
  25%  {background-image: url(https://colorlib.com/preview/theme/instylr/img/slider/2.jpg);}
  
}

.container{

  background:;
  position: relative;
  animation-name: example;
  animation-duration: 5s;  
  animation-fill-mode: forwards;

}

@keyframes example {
  from {top: 200px; opacity:0;}
  to {top: 0px; }

}
.title{
  
}
        `}</style>

    
</div>

);
export default Homepage;