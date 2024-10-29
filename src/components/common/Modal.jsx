const Modal = ({ buttonContent, modalHeading, modalContent }) => {
  return (
    <div className="card-actions justify-start">
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn">
        {buttonContent}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box text-slate-300">
          <h3 className="text-lg font-bold">{modalHeading}</h3>
          <p className="py-4">{modalContent}</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default Modal;
