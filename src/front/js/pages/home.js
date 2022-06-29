import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Form from "../component/form";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1> Hello Rigo!! </h1> <Form />
    </div>
  );
};
