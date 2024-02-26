import "../Contact/contact.css";

function Contact() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or inquiries, please feel free to reach out to
        us using the form below:
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button className="button-on" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
