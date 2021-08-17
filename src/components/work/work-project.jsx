import React, {useRef} from 'react';
import styled from 'styled-components';
import WorkImage from './image-work';
import WorkInfo from './work-info';

const WorkProjectStyled = styled.div` 
	width: 100%;
	height: auto;
	padding: 1.4em 0;
	display: grid;
	grid-template-columns: ${({ reverse }) => reverse ? '40% 60%' : '60% 40%'};
	grid-template-areas: 'image text';
	@media screen and (max-width: 768px) {
		// border: 1px solid red;
		width: 80%;
		height: 100%;
		margin: auto;
		position: relative;
		height: 50vh;
		grid-template-columns: 1fr;
		grid-template-areas: none;
	}

 `;

export default function WorkProject({
   projectName,
   statusProject,
   reverse,
   path,
   techList,
   description,
   ghEnlace,
   liveEnlace
    }) {
	return (
		<WorkProjectStyled reverse={reverse}>
		<WorkImage
		path={path}
		reverse={reverse}
		/>

		<WorkInfo
		statusProject={statusProject}
		projectName={projectName}
		reverse={reverse}
		techList={techList}
		description={description}
		ghEnlace={ghEnlace}
		liveEnlace={liveEnlace}
		/>
		</WorkProjectStyled>
	)
}