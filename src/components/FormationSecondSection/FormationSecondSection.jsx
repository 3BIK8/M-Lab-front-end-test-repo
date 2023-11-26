import React from "react";
import { FaLinkedin } from "react-icons/fa";

import "./FormationSecondSection.css";
import FormationForm from "../FormationForm/FormationForm";

function FormationSecondSection() {
    return (
        <>
            <section className="contact-second-section">
                <div className="contact-content">
                    <h2 className="section-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa.
                    </h2>
                    <ul className="social-media">
                        <span className="links">find us in :</span>
                        <li className="social">
                            <a href="https://www.linkedin.com/company/m-lab-engineering/" className="so4">
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <ul className="list">
                        <span className="links">useful links :</span>
                        <li>
                            <a href="/">lorem ipsum</a>
                        </li>
                        <li>
                            <a href="/">lorem ipsum dollor</a>
                        </li>
                        <li>
                            <a href="/">lorem emit</a>
                        </li>
                    </ul>
                </div>
                <FormationForm />
            </section>
        </>
    );
}

export default FormationSecondSection;