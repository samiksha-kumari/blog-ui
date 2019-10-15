import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AuthorShow extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      posts: []
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        const users = response.data;
        this.setState({ users });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => {
        const posts = response.data;
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <p>Name - {this.state.users.name}</p>
        <p>Email - {this.state.users.email}</p>
        <h3>Listing Posts</h3>
        <ul>
          {this.state.posts.map(post => {
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
        <button>
          <Link to="/authors">back</Link>
        </button>
      </div>
    );
  }
}

export default AuthorShow;
