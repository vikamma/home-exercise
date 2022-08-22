import PropTypes from "prop-types";

export default function Form({ amount, clickHandler, message }) {
  return (
    <div className="flex flex-col items-center gap-y-1">
      <label htmlFor="amount" className="font-bold text-cyan-800">
        {" "}
      </label>
      <input
        id="amount"
        type="number"
        className="rounded border border-cyan-900"
        value={amount}
      />
      <button
        type="button"
        className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
        onSubmit={clickHandler}
      >
        Submit
      </button>
      <p>{message}</p>
    </div>
  );
}

Form.propTypes = {
  amount: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
