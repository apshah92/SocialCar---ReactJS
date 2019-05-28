import React from 'react';
import '../style/bootstrap.min.css';

export default class Logo extends React.Component {
    render(){
        return (
            <div className={this.props.className}>
                <img id="myImage" className="rounded-circle" src={this.props.path}  />
            </div>
        );
    }
}

