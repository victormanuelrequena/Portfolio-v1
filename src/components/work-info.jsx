import React from 'react';
import styled from 'styled-components';
import WorkText from './work-text';
import UsageTech from './usage-tech';

const WorkInfoStyled = styled.div`
	// border: 1px solid green;
	width: 100%;
	height: 100%;
	// grid-area: ${({ reverse }) => reverse ? 'image': 'text'};
	display: flex;
	flex-direction: column;
	align-items: ${({ reverse }) => reverse ? 'flex-start' : 'flex-end'};
	.wrapper-mobile {
		width: 100%;
		height: 100%;
		// grid-area: ${({ reverse }) => reverse ? 'image': 'text'};
		display: flex;
		flex-direction: column;
		align-items: ${({ reverse }) => reverse ? 'flex-start' : 'flex-end'};
	}
	.project-name {
		// border: 1px solid red;
		color: var(--light-slate);
		font-size: 26px;
		tranform: rotateY(180deg);
	}
	.status-project {
		// border: 1px solid red;
		color: var(--green);
		font-size: 16px;
		font-family: monospace;
	}
	@media screen and (max-width: 768px) {
		// border: 1px solid red;
		cursor: pointer;
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(24,49,80,.90);
		// grid-area: ${({ reverse }) => reverse ? 'text': 'text'};
		align-items: ${({ reverse }) => reverse ? 'flex-start' : 'flex-start'};
		.wrapper-mobile {
			// border: 1px solid green;
			width: 90%;
			height: 80%;
			margin: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.status-project {
			width: 100%;
			display: block;
			padding-left: 1.7em;
		}
		.project-name {
			width: 100%;
			display: block;
			padding: 4% 0;
			padding-left: 1em;
		}
	}
 `;

 export default function WorkInfo({statusProject, projectName, reverse}) {

 	return (
 	<WorkInfoStyled reverse={reverse}>
 			<div className="wrapper-mobile">
 			<p className="status-project">{statusProject}</p>
			<strong className="project-name">{projectName}</strong>
			<WorkText />
			<UsageTech
			primaryCard={true}
			techList={['React', 'Express.js', 'MongoDB']}
			/>
 			</div>
 	</WorkInfoStyled>
 	)
 }