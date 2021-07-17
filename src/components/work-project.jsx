import React, {useRef} from 'react';
import styled from 'styled-components';
import WorkImage from './image-work';
import WorkInfo from './work-info';

const WorkProjectStyled = styled.div` 
	// border: 1px solid white;
	width: 100%;
	height: 60vh;
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

export default function WorkProject({ projectName, statusProject, reverse }) {
	return (
		<WorkProjectStyled reverse={reverse}>
		<WorkImage
		path="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
		reverse={reverse}
		/>

		<WorkInfo
		statusProject={statusProject}
		projectName={projectName}
		reverse={reverse}
		/>
		</WorkProjectStyled>
	)
}