import React from 'react';
import styled from 'styled-components';
import ProjectCard from './project-card';
import redirect__URL from 'configs/enlaces';

const ProjectStyled = styled.div`
	width: 70%;
	height: auto;
	margin: auto;
	display: flex;
	flex-direction: column;
	padding-top: 4em;
	padding-bottom: 4em;
	.titles {
		padding: 1.4em 0;
		h4 {
			margin: 8px;
		}
	}
	.grid {
	// border: 1px solid green;
	min-width: 100%;
	min-height: 660px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 46% 54%;
	justify-content: center;
	align-items: center;
	column-gap: .8em;
	row-gap: .4em;
	}

	.other-projects {
		color: var(--lightest-slate);
		font-size: 30px;
		display: block;
		text-align: center;
		letter-spacing: .1em;
	}
	.view-the-archive {
		color: var(--green);
		font-family: monospace;
		display: block;
		text-align: center;
		text-decoration: none;
		font-size: 16px;
	}

	@media screen and (max-width: 1024px) {
		.grid {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 30% 40% 30%;
			row-gap: 1.6em;
		}
	}

	@media screen and (max-width: 665px) {
		.grid {
			grid-template-columns: 375px;
			grid-template-rows: 280px 280px 280px 280px 280px 280px;
			row-gap: 2em;
		}
	}
 `;

export default function Projects() {
	const {
	rock_paper_sccisors
	} = redirect__URL;
	return (
		<ProjectStyled>
			<div className="titles">
			<h4 className="other-projects">Other Projects</h4>
 			<a className="view-the-archive" href="#">View the archive</a>
			</div>
			<div className="grid">
			<ProjectCard
				listTech={['React.js', 'Styled-components']}
				projectName="Rock Paper Sccisors"
				githubURL={rock_paper_sccisors}
				description="This is my resolution to frontend mentor challenge of a game of rock paper sccisors."
			/>
			<ProjectCard
				listTech={['React.js', 'CoinGecko API']}
				projectName="CoinGecko-api"
				githubURL="https://github.com/victormanuelrequena/CoinGecko-api"
				description="This is a simple app of prices of crypto, using the api of CoinGecko."
			/>
			<ProjectCard
				listTech={['React.js', 'Styled-components', 'Firebase']}
				projectName="Twitter Clone"
				githubURL=""
				description=""
			/>
			<ProjectCard
				listTech={['React', 'Material UI']}
				projectName="Portfolio"
				githubURL=""
				description=""
			/>
			<ProjectCard
				listTech={['React', 'Material UI']}
				projectName="Covid 19 Tracker"
				githubURL=""
				description=""
			/>
			<ProjectCard
				listTech={['JavaScript', 'CSS', 'HTML']}
				projectName="Rock Paper Sccisors"
				githubURL=""
				description=""
			/>
			</div>
		</ProjectStyled>
	)
}