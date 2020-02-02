import React, { Component } from 'react';

class Person extends Component {
    state = {
        infoDisplay: false,
        displayClass: 'hide'
    }
    toggleInfo = () => {
        this.state.infoDisplay ? this.setState({displayClass: 'hide'}) : this.setState({displayClass: 'show'});
    }
    handleClick = () => {
        this.setState({infoDisplay: !this.state.infoDisplay});
        console.log(this.state.infoDisplay);
        this.toggleInfo();
    }
    contact = this.props.person;
    render() {
        return (
            <li className='contact-card'>
                <div className='name'>
                    <h1 className='first-name'>{this.contact.name.first}</h1>
                    <h2 className='last-name'>{this.contact.name.last}</h2>
                </div>
                <div className='info'>
                    <div className='image-container'>
                        <img src={this.contact.picture.large} alt='contact'></img>
                    </div>
                    <div className={this.state.displayClass}>
                        <ul>
                            <li className='phone'>p: {this.contact.phone}</li>
                            <li className='cell'>c: {this.contact.cell}</li>
                            <li className='email'>e: {this.contact.email}</li>
                        </ul>
                    </div>
                </div>
                <button onClick={this.handleClick}>More Info</button>
            </li>
        );
    }
}

export default Person;