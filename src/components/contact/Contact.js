import React from 'react';
import styled from 'styled-components';

function Contact() {
	return (
		<ContactStyled>
			<Content>
				<Title>Contact</Title>
				<Form>
				<FormGroup name="name">
					<Label>
					Name
					<Input
					type="text"
					/>
					</Label>
				</FormGroup>
				<FormGroup name="lastName">
					<Label>
					Last Name
					<Input
					type="text"
					/>
					</Label>
				</FormGroup>
				<FormGroup name="email">
					<Label>
					Email
					<Input
					type="text"
					/>
					</Label>
				</FormGroup>
				<FormGroup name="phone">
					<Label>
					Phone
					<Input
					type="text"
					/>
					</Label>
				</FormGroup>
				<Message name="message">
					<MessageText
					rows="8"
					/>
				</Message>
				<Button>
					Send
				</Button>
				</Form>
			</Content>
		</ContactStyled>
	)
}

const ContactStyled = styled.section`
	min-width: 360px;
	width: 70%;
	height: auto;
	padding-bottom: 4em;
	margin: auto;
	// border: 1px solid red;
`;

const Title = styled.h2`
	font-size: 36px;
	color: var(--white);
	display: block;
	text-align: center;
	padding: 1em 0;
`;

const Content = styled.div`
	// border: 1px solid red;
	min-width: 360px;
	max-width: 700px;
	min-height: 600px;
	margin: auto;
`;

const Form = styled.form`
	// border: 1px solid green;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 60px 60px 140px 60px;
	grid-template-areas: "name lastName" "email phone" "message message" "send send";
	grid-gap: 2em;
	padding: 1em;
	div[name=name] {grid-area: name;}
	div[name=lastName] {grid-area: lastName;}
	div[name=email] {grid-area: email;}
	div[name=phone] {grid-area: phone;}
	div[name=message] {grid-area: message;}
`;

const FormGroup = styled.div`

`;

const Label = styled.label`
	display: flex;
	row-gap: 10px;
	flex-direction: column;
	color: var(--light-slate);
	font-weight: bold;
`;

const Input = styled.input`
	border: none;
	outline: none;
	font-size: 19px;
	padding: .6em;
	letter-spacing: .05em;
	border-radius: 8px;
	background: rgba(18, 17, 48, 1);
	color: var(--light-slate);

	&:focus {
		box-shadow: 0px 2px 1px #f05800;
	}
`;

const Message = styled.div`
	grid-column: span 2;
`;

const MessageText = styled.textarea`
	width: 100%;
	border-radius: 8px;
	margin: 0 auto;
	border: none;
	outline: none;
	resize: none;
	background: rgba(18, 17, 48, 1);
	font-size: 17px;
	font-family: monospace;
	color: var(--white);
`;

const Button = styled.button`
	grid-area: send;
	border-bottom-right-radius: 8px;
	border-bottom-left-radius: 8px;
	border: none;
	outline: none;
	background: rgba(180, 48, 10, 1);
	color: var(--white);
	font-size: 20px;
	cursor: pointer;
	&:hover {
		background: #f05100;
	}
`;

export default Contact;



