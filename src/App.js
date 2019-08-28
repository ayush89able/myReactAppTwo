import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
const API_URL = 'https://jsonplaceholder.typicode.com';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    const url = `${API_URL}/users/`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
     })
    }
     render() {
      return (
        <div className="container">
            <div className="col-xs-8">
            <h1 style={{textAlign:'center'}}>Users Registered with us</h1>
            {this.state.users.map((user) => (
              <div  key={user.id} className="card">
              <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6>Email: {user.email}</h6>     
                  <h6>Contact: {user.phone}</h6>
                  <h6>Website: {user.website}</h6>
                  <h6>Company: {user.company.name}</h6>    
                  <h6>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</h6> 
                </div>
              </div> 
            ))}
            </div>
          </div>
      );
  }
}
export default App;
