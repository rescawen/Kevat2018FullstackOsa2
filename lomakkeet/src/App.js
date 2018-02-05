import React from 'react';
import Persons from './components/Persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: props.persons,
      personsToShow: props.persons,
      newName: 'Uusi nimi',
      newNumber: 'Uusi numero',
      filter: ''
    }

  }

  addPerson = (event) => {
    event.preventDefault()
    var toggle = 0;
    const a = this.state.newName
    this.state.persons.forEach(function (item) {
      if (a === item.name) {
        toggle = 1;
        alert("Tämä nimi on jo käytetty")
      }
    });

    if (toggle === 1) {
      return
    }

    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber,
    }

    const persons = this.state.persons.concat(personObject)

    this.setState({
      persons,
      newName: 'Uusi nimi',
      newNumber: 'Uusi numero',
      personsToShow: persons
    })
  }

  handlePersonChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })

  }
  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })

  }


  handleFilterChange = (event) => {
    console.log(event.target.value)
    var updatedList = this.state.persons;
    updatedList = updatedList.filter(function (person) {
      return person.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ personsToShow: updatedList })

  }

  render() {

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>rajaa näytettäviä
          <input
            onChange={this.handleFilterChange}
          />
        </div>
        <h3>Lisää uusia</h3>
        <form onSubmit={this.addPerson}>
          <div>nimi:
          <input
              value={this.state.newName}
              onChange={this.handlePersonChange}
            />
          </div>
          <div>numero:
          <input
              value={this.state.newNumber}
              onChange={this.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h3>Numerot</h3>
        <div>
          {this.state.personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>

      </div>
    )
  }
}

export default App