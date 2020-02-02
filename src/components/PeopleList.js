import React, { Component } from 'react';
import Person from './Person'
import '../css/style.css';

class PeopleList extends Component {
    state = {
        users: [],
    }

    fetchUsrs = () => {
        const url = 'https://randomuser.me/api?results=25';
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({users: res.results}));
    }

    render() {
        return (
            <div className='rolo-app'>
                <button className='rolodex' onClick={this.fetchUsrs}>Rolodex</button>
                <ul className='rolodex-usrs'>
                    {this.state.users.map((person) => <Person key={person.login.uuid} person={person} />)}
                </ul>
            </div>
        );
    }
}

export default PeopleList;