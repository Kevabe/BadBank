function AllData(){
  const ctx = React.useContext(UserContext);




  React.useEffect(() => {
    
  var card = document.getElementById("alldatacard");

  var data = "";
  
  for (let i = 0; i < ctx.users.length; i++) {
    data = data.concat("<label>" + ctx.users[i].email + " " + ctx.users[i].password + " " + ctx.users[i].balance + "</label><br/>");
    
  }

  card.innerHTML = data;


}, []);






  return (
    <>
    <h5>All Data in Store</h5>
    <Card
      bgcolor="primary"
      header="All Data (email, password, balance)"
      status={status}
      body={ 
              <>
              <div id = "alldatacard">
              
              </div>
  
              </>
            }
    />
    </>
  );
}
