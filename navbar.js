function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" title = "A really bad bank!">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" title = "You can make a fake account here, don't use real passwords/emails">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/" title = "You can log into an account here">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" title = "You can make a deposit here">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" title = "You can make a withdraw here">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" title = "You can see all the accounts here">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}