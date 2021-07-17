import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div` 
	// border: 1px solid red;
	width: 100%;
	height: auto;
	margin: auto;
	display: flex;
	flex-direction: column;


	@media screen and (max-width: 375px) {
  		width: 100%;
  	}
 `;

export default function Wrapper({children}) {
	return (
	<WrapperStyled>
	{children}
	</WrapperStyled>
	)
};