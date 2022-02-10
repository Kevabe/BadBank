function NavBar(){
    const homeTitle = 'Bad bank\'s Home Page.\nHere you will find the bank\'s information';
    const CATitle = 'Create a bank account in the world\'s worst bank.';
    const withdrawTitle = 'Here you can select the amount of cash\nyou\'d like to withdraw from your account.';
    const depositTitle = 'Here you can deposit cash to your account.';
    const allDataTitle = 'Here you can see the data from\nall the accounts from the Bad Bank';
    return(
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">BadBank</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" title={homeTitle}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/CreateAccount/" title={CATitle} >CreateAccount</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/withdraw/" title={withdrawTitle}>Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/deposit/" title={depositTitle}>Deposit</a>
                        </li>   
                        <li className="nav-item">
                            <a className="nav-link" href="#/alldata/" title={allDataTitle}>AllData</a>
                        </li>          
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}