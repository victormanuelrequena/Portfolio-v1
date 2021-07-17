import React from 'react';
import styled from 'styled-components';

const WorkImageStyled = styled.div`
		// border: 1px solid red;
		grid-area: ${({ reverse }) => reverse ? 'text' : 'image'};
		max-width: 600px;
		max-height: 360px;
		min-width: 300px;
		min-height: 100px;
		position: relative;
		cursor: pointer;
		&:before {
			content: '';
			position: absolute;
			display: inline-block;
			width: 100%;
			height: 100%;
			background: rgba(34,59,90,.50);
			transition: .5s;
		}
		&:hover::before {
			background: transparent;
		}
		.image-work {
		// border: 2px solid green;
		object-fit: cover;
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
		}
`;

export default function WorkImage({ path, reverse }) {
	return(
		<WorkImageStyled reverse={reverse}>
			<img src={path} className="image-work" alt="" />
		</WorkImageStyled>
	)
}