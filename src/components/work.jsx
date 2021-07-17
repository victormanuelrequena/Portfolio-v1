import React from 'react';
import styled from 'styled-components';
import WorkProject from './work-project';
import Projects from './projects';

const WorkStyled = styled.div`
	// border: 1px solid #f05800;
	width: 70%;
	height: auto;
	display: grid;
	margin: 0 auto;
	.work {
		color: var(--light-slate);
		font-size: 28px;
		position: relative;
		padding: 0;
		margin: 0;
	}
	.work::before {
		content: '03. ';
		font-family: monospace;
		font-size: 24px;
		font-weight: 100;
		color: var(--green);
	}
	.work::after {
		content: '';
		display: inline-block;
		background: var(--lightest-navy);
		width: 300px;
		height: 1px;
		position: absolute;
		top: 50%;
		margin-left: .8em;
	}
	.work-primary {
		display: flex;
		flex-direction: column;
		row-gap: 2em;
	}
	.work-secondary {
		
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		.work::after {
			width: 50%;
		}

	}
 `;

 export default function Work() {
 	return (
 		<WorkStyled id="work">
 		<div className="work-primary">
		<h4 className="work">Works</h4>
		<WorkProject 
		statusProject="Featured project"
		projectName="Octo Profile"
		reverse={false}
		/>
		<WorkProject 
		statusProject="Featured project"
		projectName="Rock Pape Sccisors"
		reverse={true}
		/>
		<WorkProject 
		statusProject="Featured project"
		projectName="Spotify Profile"
		reverse={false}
		/>
 		</div>
 		</WorkStyled>
 	)
 }









