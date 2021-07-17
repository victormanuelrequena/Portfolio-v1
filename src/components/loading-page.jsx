import React, { useEffect } from 'react';
import styled from 'styled-components';

const LoadingPageStyled = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	#canvas {
		border: 1px solid red;
	}
 `;


const LoadingPage = () => {

	useEffect(() => {
		let canvas = document.getElementById('canvas');
		const ctx = canvas.getContext('2d');

		let x = canvas.width / 2 + 10;
		let y = canvas.height / 6 + 10;

		ctx.strokeStyle='#64ffda';
		ctx.lineWidth="6"

		ctx.beginPath();
		ctx.moveTo(x, y)
		ctx.lineTo(x, y )
		ctx.lineTo(x, y )
		ctx.lineTo(x, y )
		ctx.lineTo(x, y )
		ctx.lineTo(x, y )
		ctx.lineTo(x, y )
		ctx.stroke();

	},[])

	return (
		<LoadingPageStyled>
			<canvas id="canvas" width="200px" height="200"></canvas>
		</LoadingPageStyled>
	)
}

export default LoadingPage