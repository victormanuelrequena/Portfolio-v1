import React from 'react';
import styled from 'styled-components';

const ExperienceTextStyled = styled.div`
	// border: 1px solid red;
	max-width: 100%;
	max-height: 80%;
	display: flex; 
	flex-direction: column;
	justify-content: center;
	padding-left: 1.4em;
	.text {
		color: var(--slate);
		line-height: 1.6em;
		font-size: .8rem;
		margin-top: .4em;
	}
	.cargue {
		// border: 1px solid green;
		font-size: .9rem;
		font-family: 'Inter', sans-serif;
		color: var(--lightest-slate);
		padding: 1em 0;
	}
	.social-name {
		color: var(--green);
		padding-left: .8em;
	}
	@media screen and (max-width:665px) {
		.cargue {
			padding-top: 2em;
		}
	}
`;

export default function ExperienceText( { cargue, text, company } ) {

	return (
		<ExperienceTextStyled> 
		<h4 className="cargue">{cargue}
		<span className="social-name">{`@ ${company}`}</span>
		</h4>
		<p className="text">{text}</p>
		</ExperienceTextStyled>
	)
}