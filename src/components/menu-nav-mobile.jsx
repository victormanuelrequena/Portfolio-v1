import React from 'react';
import styled from 'styled-components';

const MenuNavMobileStyled = styled.div`
	position: fixed;
	top: 0;
	z-index: 999;
	width: 100vw;
	min-height: 100vh;
	// border: 2px solid red;
	background: rgba(0,0,0,.4);
 	transform: translateX(0%);
	transition: 1s;
 	.nav-mobile {
 		// border: 1px solid red;
 		position: absolute;
 		top: 0;
 		right: 0;
 		width: 50%;
 		height: 100vh;
 		background: var(--navy);
 		transition: .4s;
 		transform: translateX(0%);
 	}
 `;

const MenuNavMobile = ({ isMobile }) => {
	return (
		<MenuNavMobileStyled>
			{
				isMobile ?
				<nav className="nav-mobile">
				</nav>
				: null
			}

		</MenuNavMobileStyled>
	)
}

export default MenuNavMobile