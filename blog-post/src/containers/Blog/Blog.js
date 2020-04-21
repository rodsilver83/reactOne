import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPostID: null
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPosts });
                console.log('Get: ', response);
            })
    }

    postClickHandler = (id) => {
        this.setState({ selectedPostID: id });
    }

    render() {
        const posts = this.state.posts.map((post) => (
            <Post key={post.id}
                title={post.title}
                author={post.author}
                click={() => this.postClickHandler(post.id)} />)
        );
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostID} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;