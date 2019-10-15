import React from 'react'
import Posts from './Posts'
import Author from './Author'
import {BrowserRouter ,Route ,Link} from 'react-router-dom'
import PostShow from './PostShow'
import AuthorShow from './AuthorShow'




function App(props){
    return (
        <BrowserRouter>
        <div>
            <h2> Blog UI</h2>
            <Link to = "/posts"> Posts </Link><br/>
            <Link to = "/authors"> Author </Link><br/>
         
            
           <Route path = "/posts"   component = {Posts} exact = {true}/>
           <Route path = "/posts/:id"  component = {PostShow}/>
           <Route path = "/authors"  component = {Author} exact = {true}/>
           <Route path = "/authors/:id"   component = {AuthorShow} />
           </div>
        </BrowserRouter>
    )

}

export default App