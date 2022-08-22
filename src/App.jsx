import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [balance, setBalance] = useState(100);
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handleChange = (event) => setAmount(event.target.value);

  const handleClick = () => {
    if (amount <= balance) {
      if (amount > 0) {
        setBalance(balance - amount);
        setMessage(
          `Now your balance is $${balance}.You transferred $${amount}`
        );
      } else {
        setMessage(`You couldn't transfer negative amount`);
      }
    } else {
      setMessage(`You balance $${balance} isn't enough to transfer`);
    }
  };

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold text-cyan-900">
        Enter Amount:
      </h1>

      {/* <form className="mx-auto flex w-1/3 justify-between gap-x-12"> */}
      <Form
        amount={amount}
        clickHandler={handleClick}
        changeHandler={handleChange}
      />
      {/* </form> */}
      <p>{message}</p>
    </>
  );
}

export default App;
