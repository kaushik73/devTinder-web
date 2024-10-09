/* eslint-disable react/prop-types */
const Toaster = ({ message, type }) => {
  return (
    <div className="toast toast-top toast-end">
      <div className={"alert alert-" + type}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toaster;
