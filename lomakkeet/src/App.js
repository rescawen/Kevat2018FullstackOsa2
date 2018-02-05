import React from 'react';
import Person from './components/Person'
import Filter from './components/Filter'
import Form from './components/Form'
import personService from './services/personService'

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      persons: [],
      //personsToShow: [], // dynaaminen personstoshow on filterointi 2.9 tehtavan olio
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
      id: this.state.persons.length + 1
    }

    //const persons = []

    personService
    .create(personObject)
    .then(newName => {
      this.setState({
        persons: this.state.persons.concat(newName),
        newName: 'Uusi nimi',
        newNumber: 'Uusi numero',
        //personsToShow: persons
      })
    })

    // const persons = this.state.persons.concat(personObject)

    // this.setState({
    //   persons,
    //   newName: 'Uusi nimi',
    //   newNumber: 'Uusi numero',
    //   personsToShow: persons
    // })
  }

  componentWillMount() {
    personService
      .getAll()
      .then(response => {
        this.setState({ persons: response.data })
        this.setState({ personsToShow: response.data })
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

    const personsToShow = this.state.persons

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        {/* <Filter handleFilterChange={this.handleFilterChange} /> filterointi pois UI, kun ei toimi*/}
        <h3>Lisää uusia</h3>
        <Form newName={this.state.newName} newNumber={this.state.newNumber} addPerson={this.addPerson}
          handlePersonChange={this.handlePersonChange} handleNumberChange={this.handleNumberChange} />
        <h3>Numerot</h3>
        <div>
          {personsToShow.map(person => <Person key={person.id} person={person} />)}
        </div>
      </div>
    )
  }
}

export default App