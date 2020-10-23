import React from 'react';

function DateNow() {

    let nowDate = new Date();
    let dayName = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    let monName = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    return (
        <>
            <h5>Hojé é {dayName[nowDate.getDay()]} {nowDate.getDate()} de {monName[nowDate.getMonth()]} {nowDate.getFullYear()}</h5>
        </>
    )
}

export default DateNow;