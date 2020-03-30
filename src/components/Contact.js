import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [count, setCount] = React.useState(2);
  return (
    <>
      <>
        <p>This is the contact page</p>
        <Link to="/">
          <p>Take me to home</p>
        </Link>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 2)}>Click me</button>
      </>
    </>
  );
}
export default Contact;
