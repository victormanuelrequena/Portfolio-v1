import React from 'react';
import styled from 'styled-components';

const PresentationStyled = styled.div`
	// border: 1px solid red;
	width: 84%;
	height: 80vh;
	margin: auto;

	.presentation-box {
		// border: 1px solid red;
		width: 90%;
		height: 90%;
		margin: auto;
		margin-top: 60px;
	}
	.mi-name-is {
		color: var(--green);
		font-family: monospace;
		font-size: 18px;
	}
	.name, .sub-title {
		padding: 0;
		margin: 0;
		font-family: 'inter', sans-serif;
		font-size: 3.4rem;
		color: var(--lightest-slate);
	}
	.sub-title {
		color: var(--slate);
	}
	.text {
		// border: 1px solid red;
		width: 580px;
		color: var(--slate);
		font-size: 18px;
		font-family: 'Inter', sans-serif;
		line-height: 1.6em;
    	word-wrap: break-word;
	}
	.btn-get-in-touch {
		background: transparent;
		border: 1px solid var(--green);
		color: var(--green);
		padding: 18px 30px;
		font-family: monospace;
		font-size: 16px;
		margin-top: 1.6em;
		transition: .4s;
		cursor: pointer;
		border-radius: 6px;
	}
	.btn-get-in-touch:hover {
		background: var(--green-tint);
	}
	@media screen and (max-width: 765px) {
		width: 96%;
		.presentation-box {
			width: 100%;
			height: 100%;
		}
		.text {
			// border: 1px solid red;
			max-width: 100%;
			p {
				font-size: 14px;
			}
		}
		.mi-name-is {
			font-size: 15px;
		}
		.name, .sub-title {
			font-size: 40px;
			padding: 4px 0;
		}
	}
 `;

export default function Presentation() {
	return (
		<PresentationStyled>
			<div className="presentation-box">
				<p className="mi-name-is">Hi, my name is</p>
				<h1 className="name">Victor Requena.</h1>
				<h2 className="sub-title">I build things for the web.</h2>
				<div className="text">
				<p>I'm a Boston-based software engineer who specializes in building (and occasionally designing) exceptional digital experiences. Currently, I'm an engineer at Upstatement focused on building accessible, human-centered products.
				</p>
				</div>
				<button className="btn-get-in-touch">Get In Touch</button>

			</div>
		</PresentationStyled>
	)
}