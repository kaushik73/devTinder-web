import { useEffect, useState } from "react";

const Toaster = ({ message, type, timer = 2000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, timer);

    return () => clearTimeout(timeout);
  }, [timer]);

  if (!visible) return null;

  return (
    <div className="toast toast-top toast-end">
      <div className={"alert alert-" + type}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toaster;
