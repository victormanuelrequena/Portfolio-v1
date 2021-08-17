import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ExperienceText from './experience-text';

const ExperienceStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 60%;
	height: 80%;
	margin: 0 auto;
	padding: 8em 1em 12em 1em;
	.experience {
		color: #ccd6f6;
		font-size: 28px;
		position: relative;
		padding: 1em 0em 1em 0em;
		margin: 0;
	}
	.experience::before {
		content: '02. ';
		font-family: monospace;
		font-size: 24px;
		font-weight: 100;
		color: var(--green);
	}
	.experience::after {
		content: '';
		display: inline-block;
		background: var(--lightest-navy);
		width: 300px;
		height: 1px;
		position: absolute;
		top: 50%;
		margin-left: .8em;
	}
	.box-experience {
		// border: 1px solid green;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 21% 79%;
	}
	.box-works {
		// border: 1px solid red;
		width: 100%;
		height: 80%;
		display: flex;
		align-items: center;
	}
	.tags-works {
		border-left: 2px solid var(--lightest-navy);
		padding: 0;
		margin: 0;
		width: 84%;
		height: 58%;
		position: relative;
		transition: .5s;
	}
	.tag-work {
		// border: 1px solid red;
		padding: 1em 0;
		color: var(--slate);
		text-align: center;
		transition: .5s;
		cursor: pointer;
		font-family: monospace;
		font-size: 13px;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
	}
	.work-active, .tag-work:hover {
		background: var(--light-navy);
		color: var(--green);
	}
	.active-line {
		border-left: 2px solid var(--green);
	}

	@media screen and (max-width: 1000px) {
		width: 90%;
	}

	@media screen and (max-width: 665px) {
		width: 100%;
		.experience {
			padding: .4em 0;
		}
		.experience::after {
			width: 30%;
		}
		.box-experience {
			// border: 1px solid yellow;
			grid-template-columns: 1fr;
			grid-template-rows: 26% 74%;
		}
		.tags-works {
			border-left: none;
			width: 80%;
			margin: auto;
			display: flex;
			padding-bottom: 2em 0;
		}
		.tag-work {
			padding: 1em 1.2em;
		}
		.active-line {
		border-left: none;
		border-bottom: 2px solid var(--green);
	}
	}
 `;

export default function Experience() {
	const [zevenSoftware, setZevenSoftware] = useState(true);
	const [freelance, setFreelance] = useState(false);

	const experienceFreelance = (e) => {
		setZevenSoftware(false);
		setFreelance(true);
	};
	const experienceZS = (e) => {
		setZevenSoftware(true);
		setFreelance(false);
	};

	return (
		<ExperienceStyled id="experience">
		<h4 className="experience">Experience</h4>
		
		<div className="box-experience">
			<div className="box-works">
			<ul className="tags-works">
			<li
			className="tag-work"
			name="zevenSoftware"
			onClick={experienceZS}
			>
			Zeven Software
			</li>
			<li
			className="tag-work freelance"
			name="freelance"
			onClick={experienceFreelance}
			>
			Freelance
			</li>
			</ul>
			</div
			>
			{
				freelance
				? <ExperienceText
				company='Freelance'
				cargue="Software Developer"
				text="Write modern, performant, maintainable code for a diverse array of client and internal projects Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
				/>
				: null
			}
			{
				zevenSoftware
				? <ExperienceText
					company='Zeven Software'
					cargue="Frontend developer"
					text="Working for the Venezuelan-American company zevenSoftware, in which I am part of the development team as a frontend developer, working with modern frameworks such as Reactjs consuming APIs and implementing unit tests and ETE with testing libraries such as Jest, was a very edifying experience for me and all the goals set as a team were met."
				/>
				: null
			}
		</div>
		</ExperienceStyled>
	)
}