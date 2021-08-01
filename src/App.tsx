import React, {ReactElement, useState} from 'react'
import './App.css'
import StartGame from './StartGame'
import GameTable from './GameTable'
import type {GameConfig} from './Types'


const App: React.FC = (): ReactElement => {
	const [gameConfig, setGameConfig] = useState<GameConfig>()

	return (
		<div className="App">
			{!gameConfig && <StartGame setConfig={setGameConfig}/>}
			{gameConfig && <GameTable config={gameConfig}/>}
		</div>
	)
}

export default App
