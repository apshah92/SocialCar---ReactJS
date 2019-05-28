import React from 'react';


export default class LinkedImage extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <a href={this.props.link}>
                    <img src={this.props.image} />                    
                    {this.props.children}                    
                </a>
            </div>
        );
    }
}
