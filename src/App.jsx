import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [transferStatus, setTransferStatus] = useState({
    amt: 0,
    balance: 100,
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = event.target.elements[0].value;
    if (amount <= transferStatus.balance) {
      if (amount > 0) {
        transferStatus.balance -= amount;
        setTransferStatus((prevTransferStatus) => ({
          ...prevTransferStatus,
          amt: amount,
          message: `You transfer ${amount}`,
        }));
      } else {
        setTransferStatus((prevTransferStatus) => ({
          ...prevTransferStatus,
          message: `You can't transfer negative`,
        }));
      }
    } else {
      setTransferStatus((prevTransferStatus) => ({
        ...prevTransferStatus,
        message: `Your balance isn't enought`,
      }));
    }
  };

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold text-cyan-900">
        Enter Amount:
      </h1>

      {/* <form className="mx-auto flex w-1/3 justify-between gap-x-12"> */}
      <Form submitHandler={handleSubmit} />
      <p>{transferStatus.message}</p>
      <p>{`Your balance is ${transferStatus.balance}`}</p>
    </>
  );
}

export default App;
