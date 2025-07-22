/*
Consegna:
Dato un array di oggetti contenente i linguaggi del web e le loro descrizioni:
Crea una lista di bottoni, uno per linguaggio.
Inserisci sotto una card che mostri il titolo e la descrizione del primo linguaggio nell’array.
Fare in modo che, cliccando uno dei bottoni, la card in basso visualizzi il linguaggio corrispondente e la relativa descrizione
*/

import { useState } from 'react'
import progLanguages from './data/progLanguages'

function App() {

  return (
    <>
      <header className='p-3'>
        <h1>
          Learn Web Development
        </h1>
      </header>
      <main>
        {/* Crea una lista di bottoni, uno per linguaggio. */}
        <div className="container mt-5">
          <ul className='list-unstyled d-flex justify-content-around'>
            {
              progLanguages.map((progLanguage) => {
                return (
                  <li key={progLanguage.id}>
                    <button className="btn btn-primary">
                      {progLanguage.name}
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </main>
    </>
  )
}

export default App
