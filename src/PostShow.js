import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'



class PostShow extends React.Component {
    constructor(){
        super()
        this.state = {
            post: {},//select single post
            user: {},
            comments: []

        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            const post = response.data
            this.setState({post})
            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(response => {
                const user = response.data
                this.setState({user})
            })
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.state.post.id}`)
            .then(response => {
                const comments = response.data
                this.setState({comments})
           })
       })
        .catch(err => {
            console.log(err)
        })
       
       
    }

    render() {
        return (
            <div>
                <h4> Author: {this.state.user.name} </h4>
                <div><h3>Title:</h3> {this.state.post.title}  </div>
                <div><h3>Body:</h3> - {this.state.post.body} </div>
                <h2>Listing Comments - {this.state.comments.length} </h2>

            <ul>
                {   
                    this.state.comments.map(comment => {
                    return <li key ={comment.id}>{comment.name}</li>
                     })}        
           </ul>  
           <button ><Link to = "/posts">back</Link></button>
       </div>
        )
    }

} 
export default PostShow