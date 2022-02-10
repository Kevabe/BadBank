function Home(){
  return (
    <Card
      txtcolor="black"
      header="Bad Bank Home Page"
      title="Welcome to the bad bank"
      text="You can move around using the navigation bar. Remember this is a bad bank, don't give any real passwords."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
