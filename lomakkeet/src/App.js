import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: props.persons,
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
      newNumber: 'Uusi numero'
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
    this.setState({ filter: event.target.value })

  }

  render() {

    const personsToShow =
      this.state.persons

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>rajaa näytettäviä
          <input
            value={this.state.filter}
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
          {personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>

      </div>
    )
  }
}

export default App