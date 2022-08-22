import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [balance, setBalance] = React.useState(100);
  const [amount, setAmount] = React.useState("");
  const [message, setMessage] = React.useState("");

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
      setMessage(`You balance isn't enough to transfer`);
    }
  };

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold text-cyan-900">
        Enter Amount:
      </h1>

      <form className="mx-auto flex w-1/3 justify-between gap-x-12">
        <Form
          amount={Number(amount)}
          clickHandler={handleClick}
          message={message}
        />
      </form>
    </>
  );
}

export default App;
