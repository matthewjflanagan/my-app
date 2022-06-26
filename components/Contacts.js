import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Section, SectionTitle, SectionSubText } from '../styles/GlobalComponents'
import { InlineWidget } from "react-calendly";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'YBKRrVjHsEI1E8Ifg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Section>
      <SectionTitle>Contact Page</SectionTitle>
      <SectionSubText>If you have any further questions or would like to speak with me please send me a message with the best way to contact you!</SectionSubText>
    <form innerRef={form} onSubmit={sendEmail}>
      <label className='contactForm'>Name</label>
      <input className='inputs' type="text" name="user_name" />
      <label className='contactForm'>Email</label>
      <input className='inputs' type="email" name="user_email" />
      <label className='contactForm'>Message</label>
      <textarea className='inputs' id='messageField' name="message" />
      <input id='submitBtn' type="submit" value="Send" />
    </form>
    <InlineWidget 
      url="https://calendly.com/matthewflanagan/consultation" 
      styles={{
        height: '1000px',
        width: '550px',
      }}
    />
    </Section>
  );
};

export default ContactUs;