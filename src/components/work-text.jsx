import React from 'react';
import styled from 'styled-components';

const WorkTextStyled = styled.div`
	max-width: 120%;
	min-width: 120%;
	margin-top: 1em;
	padding: 20px 10px 20px 40px;
	heigth: auto;
	z-index: 100;
	border-radius: 5px;
	// border: 1px solid red;
	background: var(--light-navy);
	.work-text {
		color: var(--light-slate);
		font-size: 0.74rem;
		font-family: 'Inter', sans-serif;
		font-weight: 300;
	}
	@media screen and (max-width: 768px) {
		margin: 0;
		padding: 1em;
		max-width: 100%;
		min-width: 100%;
		height: 60%;
		background: transparent;
		.work-text {

		}
	}
 `;

 export default function WorkText() {
 	return (
 		<WorkTextStyled>
 			<p className="work-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem praesentium iusto sunt debitis, earum animi illum perspiciatis laboriosam asperiores, optio libero incidunt doloremque ullam architecto a vitae nobis tempore nesciunt?</p>
 		</WorkTextStyled>
 	)
 }