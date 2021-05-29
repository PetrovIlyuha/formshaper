import React from "react";
import { useSelector } from "react-redux";
import FormikChakraUi from "../screens/FormikChakraUi";
import ReactHookFormAntDesign from "../screens/ReactHookFormAntDesign";

const FormDisplay = () => {
  const { formLibrary, designLibrary } = useSelector(
    (state) => state.formCreation
  );
  const formTag = `${formLibrary}-${designLibrary}`
    .split("-")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join("");

  const formComponents = {
    FormikChakraUi: FormikChakraUi,
    ReactHookFormAntDesign: ReactHookFormAntDesign,
  };
  const FormDisplayComponent = formComponents[formTag];

  return <FormDisplayComponent />;
};

export default FormDisplay;
