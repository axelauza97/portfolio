import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import classes from "./Modal.module.css";
import { ModalContext } from "@/context/modal";
import { LoaderContext } from "@/context/loader";

export const Modal = () => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  const [formData, setFormData] = useState({
    email: "",
    body: "",
  });
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (formData.email.trim() == "" || formData.body.trim() == "") {
      alert("Complete form");
      return;
    }
    setIsLoading((prev) => ({
      isLoading: true,
      message: "Sending message",
    }));
    const res = fetch("/api/sendEmail", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        setIsLoading((prev) => ({
          isLoading: false,
          message: "",
        }));
        formData.body = "";
        formData.email = "";
        if (res.ok) {
          alert("Email sent complete!");
        } else {
          alert("Error sending !");
        }
        return res.json();
      })
      .then((response) => {});
  };

  return (
    <div className={classes.modal}>
      <div className={classes.box}>
        <button
          className={classes.close}
          onClick={() => setShowModal((prev) => !prev)}
        >
          X
        </button>
        <h3 className={classes.modalTitle}>
          Leave your contact data so <br />I can contact you too!
        </h3>
        <section className={classes.inputSection}>
          <div className={classes.contactInput}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handlerChange}
            />
          </div>
          <div className={classes.contactInput}>
            <label htmlFor="body">Body</label>
            <textarea
              className={classes.modalTextArea}
              id="body"
              type="text"
              name="body"
              placeholder="Body"
              rows="4"
              value={formData.body}
              onChange={handlerChange}
            />
          </div>
        </section>

        <Button className={classes.modalSubmit} onClick={handlerSubmit}>
          Contact me
        </Button>
      </div>
    </div>
  );
};
