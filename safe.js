import React from 'react'
import ReactDOM from 'react-dom'

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>

const Osa = (props) => <p>{props.osa.nimi} {props.osa.tehtavia}</p>

const Sisalto = (props) => props.kurssi.osat.map((osat, i) =>

    <div key={osat.id}>

        <Osa osa={osat} />

    </div>)

const Yhteensa = (props) => {

    const yhteensa = props.kurssi.osat.map(osat => osat.tehtavia)

    return (
        <p>yhteensä {yhteensa.reduce(reducer)} tehtävää</p>
    )
}


const Kurssi = (props) => {
    return (
        <div>
            <Otsikko kurssi={props.kurssi} />
            <Sisalto kurssi={props.kurssi} />
            <Yhteensa kurssi={props.kurssi} />
        </div>)
}

const Kurssit = (props) => props.kurssit.map((kurssit, i) =>

    <div key={kurssit.id}>

        <Kurssi kurssi={kurssit} />

    </div>)

const App = () => {
    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
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
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 1
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 2
                }
            ]
        },
    ]

    return (
        <div>
            <Kurssit kurssit={kurssit} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)