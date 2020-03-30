import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(10);
  return (
    <>
      <>
        <p>This the home page</p>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 10)}>Click me</button>
      </>
    </>
  );
}
export default Home;
