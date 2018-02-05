import React from 'react'

const Form = ({ newName, newNumber, addPerson, handleNumberChange, handlePersonChange }) => {
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>nimi:
          <input
                        value={newName}
                        onChange={handlePersonChange}
                    />
                </div>
                <div>numero:
          <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
        </div>
    )
}

export default Form
