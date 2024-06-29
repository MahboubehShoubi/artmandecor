"use client";

import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

import style from "@/template/ContactPage.module.css";

function ContactPage() {
  return (
    <div className={style.container}>
      <div className={style.mainText}>
        <div className={style.topContext}>
          <div className={style.titleFrame}>
            <img src="/images/logo/frame.png" alt="frame" />
            <p>Stay Tuned With Us</p>
          </div>
          <h2>Keep Connected & Lets Get In Touch With Our Team</h2>
        </div>


        <div className={style.information}>
          <div className={style.infoBox1}>
            <SlLocationPin />
            <h3>Head Office Address</h3>
            <p>Mazandaran-Nowshahr</p>
          </div>
          <div className={style.infoBox2}>
            <TfiEmail />
            <h3>Official Email</h3>
            <p>artmandecor006@gmail.com</p>
          </div>
          <div className={style.infoBox3}>
            <BsTelephone />
            <h3>Official Telephone</h3>
            <p>+9891111111</p>
          </div>
        </div>

        <div className={style.bottomContext}>
          <div className={style.googleMap}>
            <iframe
            className={style.map}
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3201.5581172048305!2d51.47412807583084!3d36.63702177229422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDM4JzEzLjMiTiA1McKwMjgnMzYuMSJF!5e0!3m2!1sen!2sae!4v1719569763568!5m2!1sen!2sae"
            ></iframe>
          </div>

          <div className={style.formBox}>
            <span>HAVE A QUESTION?</span>
            <p>Send Message</p>
            <form
              onSubmit="sendMessageHandler"
              className={style.formSendMessage}
            >
              <section>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Subject" />
              </section>
              <textarea placeholder="Comment"></textarea>
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
