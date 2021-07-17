import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const LeftBarStyled = styled.div`
	/*border: 1px solid red;*/
	position: fixed;
	width: 8%;
	height: 100%;
	display: flex;
	justify-content:center;
	align-items: center;

.left-bar-icon-list {
	/*border: 1px solid red;*/
	width: 40%;
	margin: 0;
	margin-top: 18em;
	padding: 0;
	display: flex;
	row-gap: 1.2em;
	flex-direction: column;
	align-items: center;
	position: absolute;
	bottom: 10em;
}

.left-bar-icon-list::after {
	// border: 1px solid red;
	content: '';
	display: inline-block;
	background: var(--white);
	position: absolute;
	top: 100%;
	margin-top: 1em;
	width: 1px;
	min-height: 200px;
}

.icon {
	color: var(--slate);
	cursor: pointer;
	transition: .4s;
}

.icon:hover {
	color: var(--green);
	transform: translateY(-6px);
}
@media screen and (max-width: 765px) {
	display: none;
}
`;

export default function LeftBar() {
	return (
		<LeftBarStyled>
			<ul className="left-bar-icon-list">
			<li className="icon"><GitHubIcon  style={{fontSize: 22}} /></li>
			<li className="icon"><InstagramIcon style={{fontSize: 22}} /></li>
			<li className="icon"><TwitterIcon   style={{fontSize: 22}} /></li>
			<li className="icon"><LinkedInIcon  style={{fontSize: 22}} /></li>
			</ul>
		</LeftBarStyled>
	)
}