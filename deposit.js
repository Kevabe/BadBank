function Deposit() {
    const ctx = React.useContext(UserContext);
    const [deposit, setDeposit] = React.useState(0);    
    let user;
    for (const eachUser of ctx.users) {
        if (eachUser.name === ctx.loggedInUser) {
        user = eachUser;
        }
    }
    function validate(){
        if (deposit > user.balance) return false;
        if (deposit < 1) return false;
        return true;
    }
    function handleCreate(){
        if (!validate()) {
            if( deposit > user.balance) {
                alert('The amount exceeds the balance on the account.');
            } 
            if (deposit < 1) {
                alert('The amount cannot be 0 or a negative number');
            }
            clearForm();
            return;
        }
        user.balance += Number(deposit);
        alert(`Successfully deposited ${deposit} to your account`);
        clearForm();
        
    }
    function clearForm(){
        setDeposit(0);
    }
    return (
        <div className="content">
            <div className="card" style={{width:'460px'}}>
                <div className="card-header" style={{textAlign:'center', fontSize:'2em'}}>World's Baddest Bank</div>
                <div className="card-title" style={{textAlign:'center', fontSize:'2em'}}>Deposit</div> 
                <div className="card-text" style={{textAlign: 'center'}}>Your balance is: ${user.balance}</div>
                <div className="card-body">
                    Amount<br/>
                    <input type="number" className="form-control" id="deposit" placeholder="Enter amount to deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
                    <button type="submit" className="btn btn-primary" onClick={handleCreate} >Deposit</button>
                </div> 
            </div>
        </div>
    );
}