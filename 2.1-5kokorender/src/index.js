import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>

const Sisalto = (props) => props.kurssi.osat.map((osat, i) =>

    <div key={osat.id}>

    <p>{osat.nimi} {osat.tehtavia}</p>

    </div>)


const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
            
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