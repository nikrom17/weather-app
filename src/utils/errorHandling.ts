import { notification } from 'antd';

export const toastError = (description: number, message: string) =>
  notification['error']({
    description,
    message,
  });

export const handelError = (response: any) => {
  const { code, message } = response;
  switch (code) {
    case 404:
      toastError(code, message);
      break;
    case 500:
      toastError(code, message);
      break;
    default:
      toastError(code, message);
  }
};
