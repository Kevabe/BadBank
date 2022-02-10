function AllData() {
    const ctx = React.useContext(UserContext);
    const users = ctx.users.map((user, index) => {
        return (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.balance}</td>
            </tr>
        );
    });
    return (
        <div id="allData" className="content">
            <div className='card' Card style={{width: '460px'}}>
                <div className="card-header" style={{textAlign:'center', fontSize:'2em'}}>World's Baddest Bank</div>
                <div className="card-title" style={{textAlign:'center', fontSize:'2em'}}>ALL DATA</div>
                <div className="card-body" style={{width:'300px'}}>
                    <div className="card-text">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>   
                                <th scope="col">Balance</th>
                            </tr>
                            </thead>
                            <tbody>
                                {users}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}