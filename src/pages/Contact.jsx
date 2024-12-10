import '../styles/contact.css'
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form Submitted!')
  }

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact