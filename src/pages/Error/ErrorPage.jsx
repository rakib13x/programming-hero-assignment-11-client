import { useRouteError } from "react-router-dom";
import errorImage from "../../../public/Error-Illustration-23.png";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center min-h-screen font-bold text-3xl"
    >
      <img src={errorImage} alt="" className="h-[500px]" />
      <h1>Oops!</h1>
      <p>
        <i>Page {error.statusText || error.message}</i>
      </p>
    </div>
  );
}
