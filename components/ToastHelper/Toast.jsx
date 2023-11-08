import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.options = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const toastSuccess = (mess) => {
  if (mess) {
    toast.success(`${mess}!`);
  }
};
export const toastError = (error) => {
  if (error) {
    toast.error(`${error}!`, { toastId: 2, type: toast.TYPE.ERROR });
  }
};
