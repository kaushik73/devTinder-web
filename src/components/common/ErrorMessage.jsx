const ErrorMessage = ({
  message = "Something Went Wrong, Please Try Later",
}) => {
  return <div className="text-red-700 text-center p-2 bg-white">{message}</div>;
};

export default ErrorMessage;
