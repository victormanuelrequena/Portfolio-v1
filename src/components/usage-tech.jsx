import React from 'react';
import styled from 'styled-components';

const UsageTechStyled = styled.ul`
	// border: 1px solid red;
	display: flex;
	width: 100%;
	margin: 0;
	padding: 0;
	margin-top: ${({primaryCard}) => primaryCard ? '1em' : '0em'};
	justify-content: space-around;
	li { 
		color: var(--slate);
		font-family: monospace;
		font-size: 15px;
	}
 `;

 export default function UsageTech({techList, primaryCard}) {
 	return (
 		<UsageTechStyled primaryCard={primaryCard}>
 			{
 				techList.map(tech => <li key={tech}>{tech}</li>)
 			}
 		</UsageTechStyled>
 	)
 }