import { HttpError, PageProps } from "fresh";
import Error404 from "../components/errors/404.tsx";
import Error from "../components/errors/Error.tsx";

export default function ErrorPage(props: PageProps) {
  const error = props.error; // Contains the thrown Error or HTTPError
  let status = 200;
  if (error instanceof HttpError) {
    status = error.status; // HTTP status code

    // Render a 404 not found page
    if (status === 404) {
      return Error404(props);
    }
  }
  if (props.config.mode === "development") {
    return <textarea>{JSON.stringify(props.error)}</textarea>;
  }
  return Error(props);
}
