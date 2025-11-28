import { HttpError, PageProps } from "fresh";
import Error404 from "../components/errors/_404.tsx";

export default function ErrorPage(props: PageProps) {
  const error = props.error; // Contains the thrown Error or HTTPError
  if (error instanceof HttpError) {
    const status = error.status; // HTTP status code

    // Render a 404 not found page
    if (status === 404) {
      return Error404(props);
    }
  }
  return <pre>{JSON.stringify(props.error)}</pre>;
}
