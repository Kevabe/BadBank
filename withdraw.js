function Withdraw() {
    const ctx = React.useContext(UserContext);
    const [withdraw, setWithdraw] = React.useState(0);    
    let user;
    for (const eachUser of ctx.users) {
        if (eachUser.name === ctx.loggedInUser) {
        user = eachUser;
        }
    }
    function validate(){
        if (withdraw > user.balance) return false;
        if (withdraw < 1) return false;
        return true;
    }
    function handleCreate(){
        if (!validate()) {
            if( withdraw > user.balance) {
                alert('The amount exceeds the balance on the account.');
            } 
            if (withdraw < 1) {
                alert('The amount cannot be 0 or a negative number');
            }
            clearForm();
            return;
        }
        alert(`This amount has been withdrawn from your account: ${withdraw}`);
        user.balance -= withdraw;
        clearForm();
        
    }
    function clearForm(){
        setWithdraw(0);
    }

    return (
        <div className="content">
            <div className="card" style={{width:'460px'}}>
                <div className="card-header" style={{textAlign:'center', fontSize:'2em'}}>World's Baddest Bank</div>
                <div className="card-title" style={{textAlign:'center', fontSize:'2em'}}>Withdraw</div> 
                <div className="card-text" style={{textAlign: 'center'}}>Your balance is: ${user.balance}</div>
                <div className="card-body">
                    Amount<br/>
                    <input type="number" className="form-control" id="withdraw" placeholder="Enter amount to be withdrawn" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
                    <button type="submit" className="btn btn-primary" onClick={handleCreate} >Withdraw</button>
                </div> 
            </div>
        </div>
    );
}