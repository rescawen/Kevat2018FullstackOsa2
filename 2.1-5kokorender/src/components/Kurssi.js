import React from 'react'

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

export default Kurssi