import { toast as toastify } from "react-toastify";

interface IToast {
  message: string;
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
  type: "success" | "error" | "info" | "warning";
  theme?: "dark" | "light" | "colored";
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: 0 | 1 | undefined;
}

const toast = ({
  message,
  position = "top-right",
  type = "info",
  theme = "light",
  autoClose = 5000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress = undefined,
}: IToast) => {
  const toastConfig = {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
  };
  switch (type) {
    case "success":
      return toastify.success(message, toastConfig);
    case "error":
      return toastify.error(message, toastConfig);
    case "info":
      return toastify.info(message, toastConfig);
    case "warning":
      return toastify.warning(message, toastConfig);
  }
};

export default toast;
