import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import React, { MouseEvent, ReactElement } from 'react'


const startGame = (evt: MouseEvent) => {
	console.log('Starting game', evt)
}

const StartGame: React.FC = (): ReactElement => {
	return (
		<>
			<div>Start Game</div>
			<form>
				<TextField label="Number of Players" variant="filled" required />
			</form>
			<div>Number of players</div>
			<div>Win Score</div>
			<div>Variations</div>
			<ul>
				<li>Include Additional Ships</li>
				<li>Gunnery only</li>
				<li>Play special on draw</li>
				<li>Increase Carnage (all minefields 2 pts)</li>
				<li>Night action</li>
				<li>Kamikaze Attacks</li>
			</ul>
			<Button variant="contained" color="primary" onClick={startGame}>
				Start Game
			</Button>
		</>
	)
}

export default StartGame
