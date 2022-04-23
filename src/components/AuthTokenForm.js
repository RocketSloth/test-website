import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { authTokenFormSchema } from "../model/Token";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

export default function AuthTokenForm() {
  const classes = useStyle();

  //   Default values
  const [initialValues] = useState({
    username: "",
    email: "",
    wallet_address: "",
    code: "",
  });

  //   handle form submit action
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    //   ----

    resetForm();
    alert("Form submitted successfully!");
  };

  return (
    <div className={classes.authTokenFormWrapper}>
      <div className={classes.authTokenForm}>
        <div className={classes.formTitle}>AUTH Token</div>
        <div className={classes.divider} />
        <div className={classes.formDescription}>
          Enter and submit the information below to get started with AUTH
        </div>

        <Formik
          validationSchema={authTokenFormSchema} // remove this line to disale validation
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, isSubmitting, touched, errors }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              <Field
                as={CustomInput}
                label="Username"
                name="username"
                errorMessage={touched.username && errors.username}
              />
              <Field
                as={CustomInput}
                label="Email"
                name="email"
                errorMessage={touched.email && errors.email}
              />
              <Field
                as={CustomInput}
                label="Wallet address"
                name="wallet_address"
                errorMessage={touched.wallet_address && errors.wallet_address}
              />
              <Field
                as={CustomInput}
                label="Code"
                name="code"
                errorMessage={touched.code && errors.code}
              />

              <CustomButton
                label="Submit"
                type="submit"
                disabled={isSubmitting}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

const useStyle = createUseStyles({
  authTokenFormWrapper: {
    height: "100vh",
    background: "rgb(38,38,38)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  authTokenForm: {
    maxWidth: 440,
    padding: 20,
    color: "#fff",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  formTitle: {
    padding: 15,
    fontSize: 24,
    fontWeight: 600,
  },
  divider: {
    height: 2,
    width: "100%",
    borderBottom: "1px solid #fff",
  },

  formDescription: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 18,
    padding: [20, 0],
  },
  form: {
    width: "100%",
  },
});
