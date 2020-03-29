import React from 'react'
import ReactDOM from 'react-dom'

import Multiplos from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multiplos.BoaTarde nome="Henrique" />
        <Multiplos.BoaNoite nome="Ana" />
    </div>
    , document.getElementById('root'))

// $('<h1>').hmlt('React 2')