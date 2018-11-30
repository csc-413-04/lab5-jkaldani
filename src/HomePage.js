import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class HomePage extends Component {

    constructor(props);
    this.sendSomeData = this.sendSomeData.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.state = {
        content: null,
        messageValue: "",
        };
    }

componentDidMount() {
    axios.get('/api/messages')
        .then((res) => {
            console.log(res.data)

        }).catch((e) => {
            console.log(e);
    });

}



    render() {
        return (
            <div className="content-area">
                {this.state.content}
                <h1>Home Page</h1>
                <p>
                    Here is my main page content <Link to="/page1/mail">Mail</Link>
                </p>
                <p>
                    <a href="https://reacttraining.com/react-router/web/guides/quick-start">Click me to find out more about routing</a>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        messages: state.testReducer.messages,
        };
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
