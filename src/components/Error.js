import { useRouteError } from "react-router";

const Error = () => {
  const erroObj = useRouteError();
  return (
    <>
      <h1>Ooops! Something Went Wrong.</h1>
      <h1>{erroObj.status}</h1>
    </>
  );
};

export default Error;
