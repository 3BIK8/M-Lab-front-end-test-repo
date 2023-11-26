import React, { useState } from "react";
import "./ContactForm.css";
import ContactFormService from "../../services/ContactFormService";

const ContactForm = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const clearForm = () => {
		setUsername("");
		setEmail("");
		setSubject("");
		setMessage("");
	};

	const handleSubmit = async () => {
		const formData = {
			fullName: username,
			from: email,
			subject: subject,
			message: message,
		};

		try {
			await ContactFormService.sendEmail(formData);
			console.log('Email sent successfully!');
			alert("Email sent successfully!");
			clearForm();
		} catch (error) {
			console.error('Error sending email:', error);
			alert("Error sending email. Please try again.");
		}
	};


	return (
		<div className="container">
			<div className="contact-card">
				<div className="inputBox">
					<input
						type="text"
						required
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<span>Full Name</span>
				</div>

				<div className="inputBox">
					<input
						type="email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<span className="user">Email</span>
				</div>

				<div className="inputBox">
					<input
						type="text"
						required
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>
					<span>Subject</span>
				</div>

				<div className="inputBox">
					<textarea
						required
						rows="10"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
					<span>Message</span>
				</div>

				<div className="buttons">
					<button className="reset" onClick={clearForm}>
						Reset
					</button>
					<button className="enter" onClick={handleSubmit}>
						Submit
					</button>
				</div>

			</div>
		</div>
	);
};

export default ContactForm;
