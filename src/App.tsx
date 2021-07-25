import React, { ReactElement } from 'react'
import './App.css'
import StartGame from './StartGame'

const App: React.FC = (): ReactElement => {
	return (
		<div className="App">
			<StartGame />
		</div>
	)
}

export default App
