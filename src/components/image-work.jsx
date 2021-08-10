import React from 'react';
import styled from 'styled-components';

const WorkImageStyled = styled.div`
		grid-area: ${({ reverse }) => reverse ? 'text' : 'image'};
		max-width: 600px;
		max-height: 380px;
		min-width: 300px;
		min-height: 100px;
		position: relative;
		cursor: pointer;
		&::before {
			content: '';
			position: absolute;
			display: inline-block;
			width: 100%;
			height: 100%;
			background-color: rgba(10,25,47, .5);
			transition: .3s;
			mix-blend-mode: multiply;
    		filter: grayscale(100%) contrast(1) brightness(90%);
		}
		&::after {
			content: '';
			position: absolute;
			display: inline-block;
			width: 100%;
			background-color: rgba(80,150,198, .24);
			height: 100%;
			top: 0;
			right: 0;
			left: 0;
			transition: .6s;
			z-index: 1;
		}
		&:hover::before {
			background: transparent;
		}
		&:hover::after {
			background: transparent;
		}

		.image-work {
		// border: 2px solid green;
		width: 100%;
		height: 100%;
		}

		@media screen and (max-width: 768px) {
			max-width: 100%;
			max-height: 100%;
			min-width: 100%;
			min-height: 100%;
			height: 100%;
			position: absolute;
			&::after {
				background: transparent;
			}
		}
`;

export default function WorkImage({ path, reverse }) {
	return(
		<WorkImageStyled reverse={reverse}>
			<img src={path} className="image-work" alt="" />
		</WorkImageStyled>
	)
}