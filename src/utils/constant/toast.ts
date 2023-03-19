import { toast } from 'react-toastify';

export const Success = (message: string) => {
  return toast.success(`${message}`);
};

export const Error = (message: string) => {
  toast.error(`${message}`);
};

export const Info = (message: string) => {
  toast.info(`${message}`);
};

export const CatchError = (message: string) => {
  toast.error(`${message}`);
};
