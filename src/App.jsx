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

  const [languageName, setLanguageName] = useState(progLanguages[0].name)
  const [languageDescription, setLanguageDescription] = useState(progLanguages[0].description)

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
                    <button className="btn btn-primary border-0" onClick={() => { setLanguageName(progLanguage.name); setLanguageDescription(progLanguage.description) }}>
                      {progLanguage.name}
                    </button>
                  </li>
                )
              })
            }
          </ul>
          {/* Inserisci sotto una card che mostri il titolo e la descrizione del primo linguaggio nell’array. */}
          <div className="card mt-5">
            <div className='card-body'>
              <h4>
                {languageName}
              </h4>
              <p>
                {languageDescription}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App


/*
Ragionamento per la dinamicità:

Alla card vanno associate delle variabili di stato che siano collegate ad un on-click dei bottoni.
*/