const Profile =()=>(

<div className="Wrapper">


<section className="hero is-medium">
  <div className="hero-body">
    <div className="container">
    
    <div className="columns">
  <div className="column is-two-fifths">
  <img src="https://colorlib.com/preview/theme/instylr/img/intro-img.jpg" alt="Girl in a jacket"/>
  </div>
  <div className="column">
  <div className="cover">
  
    <div className="subtitle is-size-7 has-text-danger is-uppercase has-text-weight-semibold is-spaced">
    Aenean quis velit pulvinar,
    </div>
    <div className="title is-size-3 is-spaced" >"I firmly believe that with the right footwear one can rule the world."</div>

    <p className="subtitle is-size-6  has-text-grey">
    Aenean quis velit pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. Donec congue vel justo eget malesuada. In arcu justo, sagittis consequat pulvinar quis, pretium quis massa. Vestibulum nec nibh eu nisi rutrum iaculis. Pellentesque placerat sit amet leo in vestibu-lum. Suspendisse quam neque, rutrum vel scelerisque eu
    </p>

    <button className="button is-large">READ ME >></button>
  </div>
  </div>
</div>

    </div>
  </div>
</section>




<style jsx>{`
font-family: "helvetica 65 medium",sans-serif;
line-height: 1.4;
.cover{
    padding-top: 3rem;
}
.button{padding: 0px 23px;
    border: 2px solid black;
    font-size: 19px;
    font-variant: all-small-caps;
    margin:20px 0px;
    box-shadow: 7px 5px 19px 0px lavenderblush;}
.button:hover{background-color: black;
    color: white;}


    img{
        box-shadow: 7px 7px 7px 2px black;

    }

 `}</style>

</div>



);
export default Profile;