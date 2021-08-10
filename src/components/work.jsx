import React from 'react';
import styled from 'styled-components';
import WorkProject from './work-project';
import Projects from './projects';
import gmGroupPNG from '../assets/gmgroup.png';
import octoprofilePNG from '../assets/octoprofile.png'
import taskAppPNG from '../assets/taskapp.png';

const WorkStyled = styled.div`
	// border: 1px solid #f05800;
	width: 72%;
	height: auto;
	display: grid;
	margin: 0 auto;
	.work {
		color: var(--light-slate);
		font-size: 28px;
		position: relative;
		padding: 0 2em 0 2em;
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
		projectName="GM Group"
		reverse={false}
		path={gmGroupPNG}
		techList={['React', 'Material UI', 'Styled-components']}
		description={"Gmgroup company website, the website has spanish and english support, a dark mode and a contact form."}
		/>
		<WorkProject 
		statusProject="Featured project"
		projectName="OctoProfile"
		reverse={true}
		path={octoprofilePNG}
		techList={['React', 'gh-polyglot', 'Styled-components', 'Chart.js']}
		description={"A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size."}
		/>
		<WorkProject 
		statusProject="Featured project"
		projectName="Spotify Profile"
		reverse={false}
		path={taskAppPNG}
		description={"Tsks is a task app that allows you to create collections with a certain color, add tasks to delete them and edit them, in addition to implementing a system of login and registration of users."}
		techList={['React', 'Node.js', 'Express.js', 'MongoDB']}
		/>
 		</div>
 		</WorkStyled>
 	)
 }









