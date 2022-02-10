function CreateAccount() {
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label) {
        if(!field){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false
        }
        if(label === 'password' && password.length < 8) {
            setStatus('Error: password length must be at least 8 chars');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }
    function handleCreate() {
        console.log(name,email,password);
        if(!validate(name, 'name is missing')) return;
        if(!validate(email, 'email is missing')) return;
        if(!validate(password, 'password')) return;
        ctx.users.push({name,email,password,balance:100});
        setShow(false);
    }
    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <div className="content">
            <div className="card" style={{width:'460px'}}>
                <div className="card-title" style={{textAlign:'center', fontSize:'2em', fontWeight:'bold'}}>World's Baddest Bank</div>
                <div className="card-body">
                {show ? (
                    <>
                    Name<br/>
                    <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                    <button type="submit" className="btn btn-primary" onClick={handleCreate} >Create Account</button>
                    
                    </>
                ):(
                    <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-outline-primary" onClick={clearForm} >Add another account</button>
                    </>
                )}
                </div>
                <div className="card-status">{status}</div>
            </div>
        </div>
    );
}