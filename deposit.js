
function Deposit(){


  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
  const [balance, setBalance]   = React.useState('0');

  const [enable, setEnable] = React.useState('');
  
  const ctx = React.useContext(UserContext);  

  React.useEffect(() => {for (let i = 0; i < ctx.users.length; i++) {
    if (ctx.users[i].email == ctx.main) {
      setBalance(ctx.users[i].balance)
      break;
    }
  }}, []);
  
  
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),5000);
        alert(label + " is blank!");
        return false;
      }

      if (isNaN(field)) {
        alert(field + " is not a number!")
        return false;
      }

      if (parseInt(field) < 0) {
        alert(field + " is negative!")
        return false;
      }

      return true;
  }

  function validateInput() {

    var depositAmount = document.getElementById("deposit");

    var enabled = true;

    if (depositAmount.value == "") {
      enabled = false;
    }

    if (enabled) {
      setEnable("enable");
    } else {
      setEnable("");
    }

  }

  function handleCreate(){
    console.log(deposit, balance);
    if (!validate(deposit, 'deposit'))  return;
  
    var newBalance = parseInt(balance) + parseInt(deposit);



    setBalance(newBalance.toString());

    for (let i = 0; i < ctx.users.length; i++) {
      if (ctx.users[i].email == ctx.main) {
        ctx.users[i].balance = newBalance.toString();
        break;
      }
    }


   // ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setDeposit('0');
    setEnable('');
    setShow(true);
  }



  return (
    <div>
    <h1>Deposit</h1>
    <Card
      bgcolor="primary"
      header="Deposit Into Account"
      status={status}
      body={show ? (  
              <>
              Balance <br/> 
              <label id = "balanceLabel">{balance}</label><br/>

              Deposit Amount <br/>
              <input type="deposit" className="form-control" id="deposit" placeholder="Enter Deposit Amount" value={deposit} onChange={e => {setDeposit(e.currentTarget.value); validateInput()}}/><br/>
              <button type="submit" disabled = {enable === ""} id = "createaccountsubmit" className="btn btn-light" onClick={handleCreate}  >Deposit Amount</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit"  className="btn btn-light" onClick={clearForm}>Add another deposit</button>
              </>
            )}
    />
    </div>
  )
}
