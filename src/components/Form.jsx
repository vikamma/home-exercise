import PropTypes from "prop-types";

export default function Form({ submitHandler }) {
  return (
    <form
      className="flex flex-col items-center gap-y-1"
      onSubmit={submitHandler}
    >
      <label htmlFor="amount" className="font-bold text-cyan-800">
        {" "}
        Transfer
      </label>
      <input
        id="amount"
        type="number"
        className="rounded border border-cyan-900"
      />
      <button
        type="submit"
        className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  // amount: PropTypes.number.isRequired,
  submitHandler: PropTypes.func.isRequired,
};
