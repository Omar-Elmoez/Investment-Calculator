/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Form.module.css";

const initialFormData = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: "",
};

function Form(props) {
  const [formData, setFormData] = useState(initialFormData);
  const formDataHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: +e.target.value,
    }));
  };
  const resetHandler = () => {
    setFormData(initialFormData);
    props.calculateHandler(formData);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.calculateHandler(formData);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            name="current-savings"
            value={formData["current-savings"]}
            onChange={formDataHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            name="yearly-contribution"
            value={formData["yearly-contribution"]}
            onChange={formDataHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            name="expected-return"
            value={formData["expected-return"]}
            onChange={formDataHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={formDataHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
