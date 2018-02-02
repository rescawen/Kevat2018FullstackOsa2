import React from 'react'
import ReactDOM from 'react-dom'

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>

const Sisalto = (props) => props.kurssi.osat.map((osat, i) =>

    <div key={osat.id}>

        <p>{osat.nimi} {osat.tehtavia}</p>

    </div>)

const Yhteensa = (props) => {

    const yhteensa = props.kurssi.osat.map(osat => osat.tehtavia)

    return (
        <p>yhteensä {yhteensa.reduce(reducer)} tehtävää</p>
    )
}


const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
            <Yhteensa kurssi={kurssi} />
        </div>)
}

const App = () => {

    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            },
            {
                nimi: 'Redux',
                tehtavia: 7,
                id: 4
            }
        ]
    }

    return (
        <div>

            <Kurssi kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)