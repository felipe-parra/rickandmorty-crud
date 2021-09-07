import { Fragment } from "react";
import reactDom from "react-dom";

const modalContainer = document.querySelector("#modalContainer");

const Modal = ({ hide, show, remove, id }) =>
  show
    ? reactDom.createPortal(
        <Fragment>
          <div className="portal pt-5">
            <h6 className="text-center text-white">Remove?</h6>
            <div className="d-flex justify-content-center p-2">
              <button className="btn btn-info btn-sm" onClick={hide}>
                Cancel
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => {
                    remove(id)
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </Fragment>,
        modalContainer
      )
    : null;

export default Modal;
