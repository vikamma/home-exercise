import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const balance = 100;

it("renders the updated amount when the form is submitted", () => {
  const transferAmt = 50;
  const expectedTransferMsg = `You transfer ${transferAmt}`;
  const expectedBalanceMsg = `Your balance is ${balance - transferAmt}`;

  render(<App />);

  const input = screen.getByLabelText("Transfer");
  userEvent.type(input, transferAmt.toString());
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expectedTransferMsg)).toBeInTheDocument();
  expect(screen.getByText(expectedBalanceMsg)).toBeInTheDocument();
});

it("prevents negative balances from occurring", () => {
  const transferAmt = 1000;
  const expectedMsg = "Your balance isn't enought";

  render(<App />);

  const input = screen.getByLabelText("Transfer");
  userEvent.type(input, transferAmt.toString());
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expectedMsg)).toBeInTheDocument();
});

it("checks if the balance updates second time", () => {
  const transferAmt1 = 20;
  const transferAmt2 = 25;

  const expectedBalanceMsg = `Your balance is ${
    balance - transferAmt1 - transferAmt2
  }`;

  render(<App />);

  const input = screen.getByLabelText("Transfer");
  userEvent.type(input, transferAmt1.toString());
  userEvent.click(screen.getByRole("button"));

  userEvent.type(input, transferAmt2.toString());
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(expectedBalanceMsg)).toBeInTheDocument();
});
