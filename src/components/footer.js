import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like : 0,
            love : 0,
        };

        this.handleEmogi = this.handleEmogi.bind(this);
    }

    handleEmogi(e){
        let eventOrigin = e.target.id ;
        switch (eventOrigin) {
            case 'like':
                    this.setState({
                        like : this.state.like + 1
                    });
                    break;
            case 'love' :
                    this.setState({
                        love : this.state.love + 1
                    });
                    break;
        }
        
    }

    render() {
        return (
            <div className={this.props.className} >
                <span id="like" className="clickable" onClick={this.handleEmogi}>&#9757; {this.state.like}</span>
                <span id="love" className="clickable" onClick={this.handleEmogi}>&#10084; {this.state.love}</span>
                <a href="https://www.gmail.com" className="clickable"> &#9993; </a>
            </div>
        );
    }
}