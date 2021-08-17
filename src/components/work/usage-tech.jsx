import React from 'react';
import styled from 'styled-components';

const UsageTechStyled = styled.ul`
	display: flex;
	width: 100%;
	margin: 0;
	padding: 0 1em;
	margin-top: ${({primaryCard}) => primaryCard ? '1em' : '0em'};
	column-gap: 1em;
	flex-wrap: wrap;
	li { 
		color: var(--light-slate);
		font-family: monospace;
		font-weight: 500;
		font-size: 15px;
	}
	@media screen and (max-width: 768px) {
		justify-content: flex-start;
		li {
			color: var(--lightest-slate);
		}
	}
 `;

 export default function UsageTech({techList = [], primaryCard}) {
 	return (
 		<UsageTechStyled primaryCard={primaryCard}>
 			{
 				techList.map(tech => <li key={tech}>{tech}</li>)
 			}
 		</UsageTechStyled>
 	)
 }