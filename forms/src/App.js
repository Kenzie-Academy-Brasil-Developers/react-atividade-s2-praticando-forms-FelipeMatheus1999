import "./App.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const formSchema = yup.object().shape({
    username: yup.string().required("Username required"),
    fullName: yup.string().required("fullName required"),
    email: yup.string().required("Email required").email(),
    emailConfirm: yup.string().oneOf([yup.ref("email")], "Emails not equals"),
    password: yup.string().required("password required"),
    passwordConfirm: yup.string()
    .oneOf([yup.ref("password")], "Passwords not equals"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    //Fazer um card com os dados do form!
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(onSubmitFunction)} className="form">
          <input
            type="name"
            placeholder="Username *"
            {...register("username")}
            className="form__input"
          ></input>
          {errors.username?.message && (
            <p className="form__error">Username required</p>
          )}
          <input
            type="name"
            placeholder="Full name *"
            {...register("fullName")}
            className="form__input"
          ></input>
          {errors.fullName?.message && (
            <p className="form__error">Full name required</p>
          )}
          <input
            type="email"
            placeholder="Email *"
            {...register("email")}
            className="form__input"
          ></input>
          {errors.email?.message && (
            <p className="form__error">Email required</p>
          )}
          <input
            type="email"
            placeholder="Email confirmation *"
            {...register("emailConfirm")}
            className="form__input"
          ></input>
          {errors.emailConfirm?.message && (
            <p className="form__error">Email not equal</p>
          )}
          <input
            type="password"
            placeholder="Password *"
            {...register("password")}
            className="form__password"
          ></input>
          <input
            type="password"
            placeholder="Password confirm *"
            {...register("passwordConfirm")}
            className="form__password"
          ></input>
          <input type="checkbox" className="form__button--checkbox"></input>
          <p className="checkbox__message">I accept the terms and conditions</p>
          <button type="submit" className="form__button">
            submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
