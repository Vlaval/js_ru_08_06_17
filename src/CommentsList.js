import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    };

    render() {
        const {isOpen} = this.state;
        return (
            <div>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? "hide comments" : "show comments"}
                </button>
                {this.getComments()}
            </div>
        )
    };

    getComments = () => {
        if (!this.state.isOpen) return null
        const comments = this.props.comments;
        const commentsList = comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>);

        return (
            <ul>
                {commentsList}
            </ul>
        )
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}
