import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Author extends React.Component {
    constructor(){
    super()
    this.state = {
        users: []
      
     

    }
}

componentDidMount() {
    
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
        const users = response.data
        this.setState({users})
    })
    .catch(err => {
        console.log(err)
    })

}
render() {
    
    return (
        
        <div>
            
            <h2>List of Authors -{this.state.users.length}</h2>
            <ul>
                  {
                    this.state.users.map(user => {
                        return <li key = {user.id}> 
                          <Link to = {`/authors/${user.id} `}>{user.name}</Link> </li>
                    })
                }
                </ul>
                <Link to = "/authors"> back </Link>
        </div>
    )
  }
}
  

export default Author