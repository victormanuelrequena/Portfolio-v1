import React, { useState } from 'react';
import styled from 'styled-components';
import { Divide as Hamburger } from 'hamburger-react';
import MenuNavMobile from './menu-nav-mobile';
import '../App.css';

const MenuNavStyled = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	background: var(--navy);
	position: sticky;
	top: -1px;
	z-index: 999;
	opacity: .96;
	box-shadow: 0px 1px 6px var(--dark-navy);
	.menu-content {
		width: 94%;
		height: 80%;
		margin: auto;
		// border: 1px solid green;
		display: flex;
		justify-content: space-between;
		align-items: center;
}

.logo {
	width: 50px;
	height: 50px;
	color: var(--green);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	font-weight: bold;
	border-left: 1px solid var(--green);
	border-top-left-radius: 30%;
	border-top-right-radius: 30%;
	border-bottom-left-radius: 30%;
	border-bottom-right-radius: 30%;
	z-index: 1100;
}

.menu-tags {
	/*border: 1px solid yellow;*/
	width: 50%;
	height: 80%;
	display: flex;
	justify-content:flex-end;
	align-items: center;
	column-gap: 2.2em;
}

.menu-tag {
	display: flex;
	color: var(--lightest-slate);
	text-decoration: none;
	font-size: 14px;
	transition: .4s;
	font-family: monospace;
}

.menu-tag:hover {
	color: var(--green);
}

.about::before { content: '01. '; color: var(--green); }
.experience::before { content: '02. '; color: var(--green); }
.work::before { content: '03. '; color: var(--green); }
.contact::before { content: '04. '; color: var(--green); }

.resume {
	border: 1px solid var(--green);
	color: var(--green);
	padding: 12px 18px;
	border-radius: 3px;
	transition: .4s;
	cursor: pointer;
	font-size: 14px;
}

.resume:hover {
	background: var(--green-tint);
}

.hamburger-react {
	display: none;
	z-index: 1200;
}

@media screen and (max-width: 765px) {
	.menu-tags {
		display: none;
	}
	.hamburger-react {
		display: block;
	}
}
`;

export default function MenuNav({handleNavigation}) {
	const [isOpen, setOpen] = useState(false);

	const handleMenuNav = () => {
		setOpen(!isOpen);
	};

	handleNavigation(isOpen)

	return (
		<MenuNavStyled>
			<div className="menu-content">
			<div className="logo">V</div>			
			<ul className="menu-tags">
			<li><a className="menu-tag about" href="#about">About</a></li>
			<li><a className="menu-tag experience" href="#experience">Experience</a></li>
			<li><a className="menu-tag work" href="#work">Work</a></li>
			<li><a className="menu-tag contact" href="#contact">Contact</a></li>
			<li className="resume">Resume</li>
			</ul>
			 <Hamburger
				size={40}
				color={"#64ffda"}
				toggled={isOpen}
				toggle={handleMenuNav}
			/>
			</div>
		</MenuNavStyled>
	)
}
