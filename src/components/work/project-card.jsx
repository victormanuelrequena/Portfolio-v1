import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import LinkIcon from '@material-ui/icons/Link';
import UsageTech from './usage-tech';

const ProjectCardStyled = styled.div`
	// border: 1px solid red;
	max-width: 100%;
	max-height: 100%;
	min-width: 260px;
	min-height: 320px;
	border-radius: 4px;
	background: var(--light-navy);
	display: grid;
 	grid-template-rows: 20% 60% 20%;
 	padding-top: 1em;
 	cursor: pointer;
 	transition: .4s;
 	&:hover {
 		transform: translateY(-10px);
 		box-shadow: 0px 12px 20px var(--navy-shadow);
 		 strong {
 		 	color: var(--green);
 		 }
 	}
 	.links {
 		// border: 1px solid purple;
 		width:94%;
 		margin: auto;
 		height: 100%;
 		display: grid;
 		grid-template-columns: 60% 40%;
		.icon-box {
			width: 100%;
			height: 100%;
			display: flex;
 			justify-content: flex-start;
 			padding-left: 1em;
 			align-items: center;	
		} 	
 		.icon {
 			color: var(--green);
 		
 		}
 		.icon-light {
 			color: var(--white);
 			transition: .4s;
 			cursor: pointer;
 		}
 		.icon-light: hover {
 			color: var(--green);
 		}
 		.link-box {
 			display: flex;
 			justify-content: center;
 			align-items: center;
 			column-gap: 1.8em;
 		}
 	}
 	.description-project {
 		// border: 1px solid green;
 		width: 84%;
 		height: 90%;
 		margin: auto;
 	}
 	.title-description {
 		// border: 2px solid red;
 		display: block;
 		color: var(--lightest-slate);
 		font-size: 22px;
 		font-weight: 700;
 		margin: 0;
 		padding-bottom: 1em;

 	}
 	.description-text {
 		// border: 1px solid red;
 		min-width: 100%;
 		min-height: 60%;
 		color: var(--slate);
 		font-family: 'inter', sans-serif;
 		font-size: 17px;
 		font-weight: 300;
 		padding: .0em .0em .8em .0em;
 	}
 	.tech-box {
 		width: 84%;
 		display: flex;
 		align-items: center;
 		height: 100%;
 		margin: auto;
 		// margin-top: -.4em;
 		padding-bottom: 1em 0;
 	}
	@media screen and (max-width: 1024px) {
		max-width: 100%;
		max-height: 100%;
		min-width: 300px;
		min-height: 300px;
 	}
`;

export default function ProjectCard({ projectName, listTech, githubURL, description }) {
	return (
		<ProjectCardStyled>
			<div className="links">
			<div className="icon-box">
				<FolderOutlinedIcon className="icon" style={{fontSize: 45}} />
			</div>
			<div className="link-box">
				<LinkIcon className="icon-light" style={{fontSize: 30}} />
				<a href={githubURL} target="_blank">
				<GitHubIcon className="icon-light" style={{fontSize: 25}} />
				</a>
			</div>
				</div>
				<div className="description-project">
					<strong className='title-description'>{projectName}</strong>
					<p className="description-text">{description}</p>
				</div>
				<div className="tech-box">
					<UsageTech techList={listTech} />
				</div>
		</ProjectCardStyled>
	)
}