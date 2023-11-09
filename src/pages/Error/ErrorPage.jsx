import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center min-h-screen font-bold text-3xl"
    >
      <img
        src="https://i.ibb.co/F4SzD7D/IMG-20231109-170544-227.jpg"
        alt=""
        className="h-[500px]"
      />
      <h1>Oops!</h1>
      <p>
        <i>Page {error.statusText || error.message}</i>
      </p>
    </div>
  );
}
