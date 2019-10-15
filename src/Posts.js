import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//Here, we want to display post and author, so we make a component and initialize with initial state.
class Posts extends React.Component{
    constructor(){
    super()

    this.state = {
        posts: [],
        authors: []       

    }
  }
  //we make a REST API call and set the state to display on UI.

  componentDidMount(){ //The componentDidMount is executed after the first render only on the client side
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
          const posts = response.data
          axios.get('https://jsonplaceholder.typicode.com/users')
            .then( response => {
                if(response.data.errors) {
                    console.log(response.data.erros);
                }
                else {
                    this.setState({authors: response.data, posts})
                }
            })
            .catch( err => console.log(err))
      })
      .catch(err => {
          console.log(err)
      })
      
    }

  render() {
     
      return (
          <div>
              
              <h2>Listing Posts - {this.state.posts.length} </h2>
             
              <ul>
                  {this.state.posts.map(post =>{
                      return <li key = {post.id}><h3>{this.state.authors.find( author => post.userId == author.id).name}</h3>
                     <h4> <Link to = {`/posts/${post.id}`}>{post.title}</Link> </h4></li>
                  })}
              </ul>
          
          <Link to = "/posts" > back </Link>
              
              
          </div>
      )
  }
}

export default Posts