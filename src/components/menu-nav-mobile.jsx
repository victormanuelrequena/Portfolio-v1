import React from 'react';
import styled from 'styled-components';

const MenuNavMobileStyled = styled.div`
	position: fixed;
	top: 0;
	z-index: 1000;
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
 		z-index: 1;
 	}
 `;

const MenuNavMobile = ({ isMobile }) => {
	return (
		<MenuNavMobileStyled>
			{
				isMobile ?
				<nav className="nav-mobile">
				<ul>
					<li><a className="menu-tag about" href="#about">About</a></li>
					<li><a className="menu-tag experience" href="#experience">Experience</a></li>
					<li><a className="menu-tag work" href="#work">Work</a></li>
					<li><a className="menu-tag contact" href="#contact">Contact</a></li>
					<li className="resume">Resume</li>
				</ul>
				</nav>
				: null
			}

		</MenuNavMobileStyled>
	)
}

export default MenuNavMobile