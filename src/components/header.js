import React from 'react';

export default class Header extends React.Component {
    render() {
        const {displayName,userName,postDate} = this.props ;
        return (
            <div className={this.props.className}>
                <div> <b>{displayName}</b> @{userName} - {postDate} </div>
                <div> {this.props.children} </div>
            </div>
        );
    }
}