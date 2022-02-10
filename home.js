function Home() {

    return (
        <div className="content">
            <div className="card" style={{width:'460px'}}>
                <div className="card-header" style={{textAlign:'center', fontSize:'2em'}}>Bad Bank</div>
                <div className="card-title" style={{textAlign:'center', fontSize:'2em', fontWeight:'bold'}}>World's Baddest Bank</div>
                <div className="card-text new-font" style={{textAlign:'center'}}>
                    This is the most insecure place to store your money and information, feel free to provide us and everyone else your personal data.
                </div>
                <div className="card-body">
                    <img src="../bank.png" style={{width: '250px', marginLeft:'22%'}} className="img-fluid" alt="Responsive img"/>
                </div>
            </div>
        </div>
        
    );
}