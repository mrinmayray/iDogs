import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form action="https://formsubmit.co/ec5dd8562a8477fe40a96ef6e254ed34" method="POST">
        <input type="text" placeholder="Name" name="name" required />
        <input type="email" placeholder="Email" name="email" required />
        <textarea type="text" placeholder="Message" name="name" rows="4" required ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
