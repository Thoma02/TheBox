import React, { useState } from "react";
import "./Form.css"

export default function Form() {

    const [nameValue, setNameValue] = useState("");
    const [isNameEmpty, setIsNameEmpty] = useState(true);
    const [emailValue, setEmailValue] = useState("");
    const [isEmailEmpty, setIsEmailEmpty] = useState(true);
    const [selectValue, setSelectValue] = useState("");
    const [isSelectEmpty, setIsSelectEmpty] = useState(true);
  
    const handleNameChange = (e) => {
        setNameValue(e.target.value);
        setIsNameEmpty(false);
    };

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
        setIsEmailEmpty(false);
      };

      const handleSelectChange = (e) => {
        setSelectValue(e.target.value);
        setIsSelectEmpty(false);
      };
  
      const handleBlur = () => {
        if (nameValue === "") {
            setIsNameEmpty(true);
        }
        if (emailValue === "") {
          setIsEmailEmpty(true);
        }
        };

    return (
        <div id="form-container">
            <h1>What can us do for you?</h1>
            <p id="text">We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
            <form action="">
                <div className="input-fields">
                    <div className="inputsAndLabels">
                        <input type="text" id="name" name="name" required="required" placeholder="Your Name" 
                            value={nameValue}
                            onChange={handleNameChange}
                            onBlur={handleBlur}
                        />
                        <label htmlFor="name" style={{ display: isNameEmpty ? "inline" : "none" }}></label>
                    </div>
                    <div className="inputsAndLabels">
                        <input type="email" id="email" name="email" required="required" placeholder="Email"  
                            value={emailValue}
                            onChange={handleEmailChange}
                            onBlur={handleBlur}
                        />
                        <label id="label-email" htmlFor="email" style={{ display: isEmailEmpty ? "inline" : "none" }}></label>
                    </div>
                </div>
                <div className="input-fields">
                    <label id="label-select" style={{ display: isSelectEmpty ? "inline" : "none" }}></label>
                    <select name="reasons" id="reasons"
                         value={selectValue}
                         onChange={handleSelectChange}
                    >
                        <option>Reason for Contacting</option>
                        <option>Option1</option>
                        <option>Option2</option>
                        <option>Option3</option>
                        <option>Option4</option>
                        <option>Option5</option>
                    </select>
                    <input type="text" placeholder="Phone"/>
                    <img src="./Assets/Sections/Form/vector.svg" alt=""/>
                </div>
                <textarea name="message" id="message" placeholder="Message"></textarea>
                <p id="indicator"><span className="red">* </span>indicates a required field</p>
                <input id="button" type="submit"/>
            </form>
        </div>
    )
}