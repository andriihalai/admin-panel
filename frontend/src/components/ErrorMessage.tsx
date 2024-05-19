import "./../style/ErrorMessage.css";

interface IErrorMessage {
  message: string;
}

export default function ErrorMessage({ message }: IErrorMessage) {
  return <p className="error-message">{message}</p>;
}
