import React, { ReactElement } from 'react'
import type {GameConfig} from './Types'

interface GameConfigProps {
	config: GameConfig
}

const GameConfigComponent: React.FC<GameConfigProps> = (props: GameConfigProps): ReactElement => {
	const { config } = props
	return (
		<>
			<ul>
				<li>Player type {config.playerType}</li>
				<li>Score to win {config.score}</li>
			</ul>
		</>
	)
}

export default GameConfigComponent
