import React, { Component } from 'react';
import Person from './Person'

class PeopleList extends Component {
    state = {
        users: []
    }

    fetchUsrs = () => {
        const url = 'https://randomuser.me/api?results=25';
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({users: res.results}));
    }

    render() {
        return (
            <div>
                <button onClick={this.fetchUsrs}>See Rolodex</button>
                <ul>
                    {this.state.users.map((person) => <Person key={person.login.uuid} person={person.name.first}>)}
                </ul>
            </div>
        );
    }
}

export default PeopleList;