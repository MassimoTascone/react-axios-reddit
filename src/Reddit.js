import React from 'react';
import axios from 'axios';
import Input from './Input'
import Loader from 'react-loader-spinner';


export class Reddit extends React.Component {

    state = {
        posts: [],
        loading: true
    };

    componentDidMount() {

        axios
        .get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
        .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            console.log(posts);
            this.setState({ 
                posts,
                loading: false
             });
        })
        .catch(error => {
            console.log(error);
        })

        
 }

    render() {
        const { posts} = this.state;
        return (
            <div>
                {this.state.loading ? (
                    <div className="loader">
                        <Loader type="Oval" color="#ecaf75" />
                    </div>
                ) :
                (<div>
                    <h1>{`/r/${this.props.subreddit}`} discount version</h1>
                    <Input/>
                </div>
                )
                }
                <ul>
                    {posts.map(post => (

                        <a key={post.id}   href={post.url}>
                            <li key={post.id}>
                                <strong>{post.title}</strong><span id="by"> by {post.author}</span>
                            </li>
                        </a>
                        ))}
                </ul>
            </div>
        )
    }
}

export default Reddit
