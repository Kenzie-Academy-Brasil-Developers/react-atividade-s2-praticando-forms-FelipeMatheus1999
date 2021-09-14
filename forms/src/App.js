import "./App.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { string } from "yup/lib/locale";

function App() {
  const formSchema = yup.object().shape({
    username: yup.string().required("Username required"),
    fullName: yup.string().required("fullName required"),
    email: yup.string().required("Email required").email(),
    password: yup.string().required("password required"),
    passwordconfirm: yup.string().required("confirm the password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    // return (
    //   <div className="card">
    //     <span className="card__span" >{data.username}</span>
    //     <span className="card__span" >{data.fullName}</span>
    //     <span className="card__span" >{data.email}</span>
    //   </div>
    // );
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
          {errors.username?.message}
          <input
            type="name"
            placeholder="Full name *"
            {...register("fullName")}
            className="form__input"
          ></input>
          {errors.fullName?.message}
          <input
            type="email"
            placeholder="Email *"
            {...register("email")}
            className="form__input"
          ></input>
          {errors.email?.message}
          <input
            type="email"
            placeholder="Email confirmation"
            className="form__input"
          ></input>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="form__password"
          ></input>
          {errors.password?.message}
          <input
            type="password"
            placeholder="Password confirm"
            {...register("passwordconfirm")}
            className="form__password"
          ></input>
          {errors.passwordconfirm?.message}
          <input type="checkbox" className="form__button--checkbox"></input>
          <button type="submit" className="form__button">
            submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
