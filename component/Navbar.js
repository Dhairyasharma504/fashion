const Navbar = () => (
<div className="wrapper">
<div className="container">

<div className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  
    <h2 className="text has-text-white is-uppercase is-size-3">in</h2>
    <h2 className="text has-text-danger is-uppercase is-size-3">style</h2>


    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <a className="navbar-item has-text-white is-uppercase has-text-weight-semibold">
        Home
      </a>

      <a className="navbar-item has-text-white is-uppercase has-text-weight-semibold">
        the brand
      </a>

      <a className="navbar-item has-text-white is-uppercase has-text-weight-semibold">
        portfolio
      </a>

      <a className="navbar-item has-text-white is-uppercase has-text-weight-semibold">
        blog
      </a>

      <a className="navbar-item has-text-white is-uppercase has-text-weight-semibold">
        Shop
      </a>

    
    </div>

   
  </div>
</div></div>

 <style jsx>{`
 background-color: #262626!important;

.navbar-item{
    font-family: "helvetica 65 medium",sans-serif
    font-size: 12px;
    padding-right: 25px;
    padding-left: 25px;
}
.navbar{
    padding: 0.7rem;
}
      
        `}</style></div>
);
export default Navbar;

