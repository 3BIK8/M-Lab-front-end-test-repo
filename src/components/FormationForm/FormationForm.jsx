import React, { useState } from "react";
import "./FormationForm.css";
import { FaUpload } from "react-icons/fa";
import FormationFormService from "../../services/FormationFormService";

const FormationForm = () => {
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [studyLevel, setStudyLevel] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [attachmentFilePath , setAttachmentFilePath] = useState("");
    const [fileUploadText, setFileUploadText] = useState("Select your file!");
    const clearForm = () => {
        setFullName("");
        setAddress("");
        setEmail("");
        setStudyLevel("");
        setPhoneNumber("");
        setAttachmentFilePath("");
    };

    const handleSubmit = async () => {


        const formData = {
            fullName: fullName,
            address: address,
            email: email,
            studyLevel: studyLevel,
            phoneNumber: phoneNumber,
            attachmentFilePath: attachmentFilePath,
        };


        try {
            await FormationFormService.postulateFormationForm(formData);
            console.log('Email sent successfully!');
            alert("Email sent successfully!");
            clearForm();
        } catch (error) {
            console.error('Error sending email:', error);
            alert("Error sending email. Please try again.");
            clearForm();
        }


    };


    return (
        <div className="container">
            <div className="contact-card">
                <div className="inputBox">
                    <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <span>Full Name</span>
                </div>

                <div className="inputBox">
                    <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <span>Address</span>
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
                        value={studyLevel}
                        onChange={(e) => setStudyLevel(e.target.value)}
                    />
                    <span>Study Level</span>
                </div>

                <div className="inputBox">
                    <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <span>Phone Number</span>
                </div>

                <div className="inputFileBox">
                    <label className="custom-upload-label" htmlFor="file">
                        <FaUpload className="upload-icon" />
                        CV
                    </label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        className="inputfile"
                        required
                        onChange={(e) => setAttachmentFilePath(e.target.files[0])}
                    />
                    <span>{attachmentFilePath.name}</span>
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

export default FormationForm;
