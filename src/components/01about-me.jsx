import React from 'react';
import styled from 'styled-components';

const AboutMeStyled = styled.div` 
	// border: 1px solid yellow;
	width: 70%;
	height: auto;
	margin: 4em auto;
	.about-me-t {
	// border: 1px solid yellow;
		color: var(--light-slate);
		font-size: 28px;
		position: relative;
		padding: .6em 0;
	}
	.about-me-t::before {
		content: '01. ';
		font-family: monospace;
		font-size: 24px;
		font-weight: 100;
		color: var(--green);
	}
	.about-me-t::after {
		content: '';
		display: inline-block;
		background: var(--lightest-navy);
		width: 300px;
		height: 1px;
		position: absolute;
		top: 50%;
		margin-left: .8em;
	}
	.box-about-me {
		// border: 1px solid red;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 54% 46%;
		column-gap: 1em;
	}
	.about-1 {
		// border: 1px solid yellow;
		wdith: 100%;
		height: 100%;
		max-height: 100%;
	}
	.text-about {
		color: var(--slate);
		font-weight: 400;
		font-size: 17px;
		line-height: 1.5em;
		margin: 0;
		padding-top: .6em;
	}
	.tech-tags {
		// border: 1px solid red;
		width: 70%;
		display: grid;
		justify-content: flex-start;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		row-gap: .8em;
		margin: 0;
		margin-top: 2em;
		padding: 0;

	}
	.tech-tag {
		// border: 1px solid red;
		color: var(--slate);
		font-size: 14px;
		font-family: monospace;
	}
	.tech-tag::before {
		content: '▹ ';
		// font-size: 18px;
		font-weight: bold;
		color: var(--green)

	}
	.box {
		display: flex;
		justify-content: center;
		width: 100%;
		height: auto;
		border: 1px solid red;
	}

	@media screen and (max-width: 765px) {
        // border: 1px solid red;
        width: 90%;
        min-height: 100vh;
        transform: translateY(-4em);
        .box-about-me {
        // border: 1px solid green;
        width: 100%;
        height: 100%;
		grid-template-columns: 1fr;
		grid-templates-rows: 1fr 1fr;
		row-gap: 2em;
        }
        .box-image-line {
 			display: block;
 			margin: 0 auto;
        }
		.about-me-t::after {
			width: 40%;
		}
}
 `;

export default function AboutMe() {
	return (
		<AboutMeStyled id="about">
		<h4 className="about-me-t">About Me</h4>
		<div className="box-about-me">
		<div className="about-1">
		<p className="text-about">
		Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

		Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

		Here are a few technologies I've been working with recently:
		</p>
		<ul className="tech-tags">
		<li className="tech-tag">CSS</li>
		<li className="tech-tag">JavaScript [ES6+]</li>
		<li className="tech-tag">React</li>
		<li className="tech-tag">Node.js</li>
		<li className="tech-tag">Express</li>
		<li className="tech-tag">MongoDB</li>
		</ul>
		</div>
		<div className="box">

		</div>
		</div>
		</AboutMeStyled>
		)
};