import React, {ReactElement, useState} from 'react'
import type {GameConfig} from './Types'
import {Player, PlayerType} from './Types'
import {createPlayDeck} from './DrawPile'
import {createShipDeck} from './ShipPile'

interface StartGameProps{
	setConfig:(config:GameConfig) => void
}

const createPlayerArray = (playerType:PlayerType): Player[] => {
	switch(playerType){
	case PlayerType.THREE:
		return [
			new Player(),new Player(),new Player()
		]
	case PlayerType.FOUR:
		break
	case PlayerType.FOUR_TWO_TF:
		break
	case PlayerType.FIVE:
		break
	case PlayerType.SIX:
		break
	case PlayerType.SIX_TWO_TF:
		break
	case PlayerType.SIX_THREE_TF:
		break
	case PlayerType.SEVEN:
		break
	case PlayerType.EIGHT:
		break
	case PlayerType.EIGHT_TWO_TF:
		break
	case PlayerType.EIGHT_FOUR_TF:
		break
	case PlayerType.NINE:
		break
	case PlayerType.NINE_THREE_TF:
		break

	}
	return []
}

const StartGame: React.FC<StartGameProps> = (props: StartGameProps): ReactElement => {
	const [ score, setScore ] = useState<number>(100)
	const [ playerType , setPlayerType ] = useState<PlayerType>(PlayerType.THREE)
	const [ gunneryOnly, setGunneryOnly ] = useState<boolean>(false)
	const [ increaseCarnage, setIncreaseCarnage ] = useState<boolean>(false)
	const [ nightAction, setNightAction ] = useState<boolean>(false)
	const [ specialPlay, setSpecialPlay ] = useState<boolean>(false)
	const [ noAdditionalShips, setNoAdditionalShips ] = useState<boolean>(false)
	const [ kamikaze, setKamikaze ] = useState<boolean>(false)

	const createGame = (evt:React.SyntheticEvent) => {
		evt.preventDefault()
		const config = {
			playerType,
			score,
			shipDeck: createShipDeck(),
			playDeck: createPlayDeck(),
			players: createPlayerArray(playerType),
			noAdditionalShips,
			gunneryOnly,
			increaseCarnage,
			kamikaze,
			nightAction,
			specialPlay
		}
		props.setConfig(config)
	}

	const changePlayerType = (evt:React.FormEvent<HTMLSelectElement>) => {
		setPlayerType(PlayerType[evt.currentTarget.value as keyof typeof PlayerType])
	}

	const changeScore = (evt:React.FormEvent<HTMLInputElement>) => {
		setScore(Number(evt.currentTarget.value))
	}

	const changeNoAdditionalShips = (evt:React.FormEvent<HTMLInputElement>) => {
		setNoAdditionalShips(evt.currentTarget.checked)
	}

	const changeOnlyGunnery = (evt:React.FormEvent<HTMLInputElement>) => {
		setGunneryOnly(evt.currentTarget.checked)
	}

	const changeSpecialPlay = (evt:React.FormEvent<HTMLInputElement>) => {
		setSpecialPlay(evt.currentTarget.checked)
	}

	const changeIncreaseCarnage = (evt:React.FormEvent<HTMLInputElement>) => {
		setIncreaseCarnage(evt.currentTarget.checked)
	}

	const changeNightAttack = (evt:React.FormEvent<HTMLInputElement>) => {
		setNightAction(evt.currentTarget.checked)
	}

	const changeKamikaze = (evt:React.FormEvent<HTMLInputElement>) => {
		setKamikaze(evt.currentTarget.checked)
	}

	return (
		<>
			<form>
				<label>Number of players:</label>
				<select name="type" onChange={changePlayerType} defaultValue="1">
					<option value="1" selected={playerType === PlayerType.THREE}>3</option>
					<option value="2" selected={playerType === PlayerType.FOUR}>4</option>
					<option value="3" selected={playerType === PlayerType.FOUR_TWO_TF}>4 two task forces</option>
					<option value="4" selected={playerType === PlayerType.FIVE}>5</option>
					<option value="5" selected={playerType === PlayerType.SIX}>6</option>
					<option value="6" selected={playerType === PlayerType.SIX_TWO_TF}>6 two task forces</option>
					<option value="7" selected={playerType === PlayerType.SIX_THREE_TF}>6 three task forces</option>
					<option value="8" selected={playerType === PlayerType.SEVEN}>7</option>
					<option value="9" selected={playerType === PlayerType.EIGHT}>8</option>
					<option value="10" selected={playerType === PlayerType.EIGHT_TWO_TF}>8 two task forces</option>
					<option value="11" selected={playerType === PlayerType.EIGHT_FOUR_TF}>8 four task forces</option>
					<option value="12" selected={playerType === PlayerType.NINE}>9</option>
					<option value="13" selected={playerType === PlayerType.NINE_THREE_TF}>9 three task forces</option>
				</select><br/>
				<label>Play to Score</label>
				<input type="text" id="score" value={score} onChange={changeScore}/><br/>
				Variations<br/>
				<input type="checkbox" onChange={changeNoAdditionalShips} checked={noAdditionalShips}/>No Additional Ships<br/>
				<input type="checkbox" onChange={changeOnlyGunnery} checked={gunneryOnly}/>Gunnery Only<br/>
				<input type="checkbox" onChange={changeSpecialPlay} checked={specialPlay}/>Special card does not end turn<br/>
				<input type="checkbox" onChange={changeIncreaseCarnage} checked={increaseCarnage}/>Increase Carnage (all minefields 2pts)<br/>
				<input type="checkbox" onChange={changeNightAttack} checked={nightAction}/>Night Action<br/>
				<input type="checkbox" onChange={changeKamikaze} checked={kamikaze}/>Kamikaze Attacks<br/>
				<input type="submit" name="Start Game" onClick={createGame}/>
			</form>
		</>
	)
}

export default StartGame
