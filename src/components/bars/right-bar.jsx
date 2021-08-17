import React from 'react';
import styled from 'styled-components';

const RightBarStyled = styled.div`
	position: fixed;
	right: 0;
	width: 8%;
	height: 100vh;
	min-height: 100vh;
	display: flex;
	justify-content:center;
	align-items: flex-end;

.right-box {
	position: absolute;
	bottom: 12em;
}

.correo {
	// border: 1px solid red;
	margin: 0 auto;
    padding: 0px;
    font-family: monospace;
    font-weight: 100;
    font-size: 15px;
  	color: var(--slate);
    letter-spacing: 0.2em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    position: relative;
    transition: .4s;
    top: 2em;
}

.correo:hover {
	color: var(--green);
	cursor: pointer;
	transform: translateY(-10px);
}

.correo-box::after {
 	content: '';
	display: inline-block;
	background: var(--white);
	position: absolute;
	top: 100%;
	right: 0;
    left: 0;
    margin: 0px auto;
	margin-top: 2.8em;
	width: 1px;
	min-height: 200px;
}
@media screen and (max-width: 900px) {
	display: none;
}
`;

export default function RightBar() {
	return (
		<RightBarStyled>
		<div className="right-box">
		<div className="correo-box">
			<h6 className="correo">requenadev1@gmail.com</h6>
		</div>
		</div>
		</RightBarStyled>
	)
}