import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import Message from "./../components/LoadingError/Error";
import Loading from "./../components/LoadingError/Loading";
import { login } from "./../redux/Actions/UserActions";

const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}

        <div className="card">
          <ul className="tab-group">
            <li className="active">
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                Sign In
              </Link>
            </li>
            <li className="tab">
            <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : "/register"
                    }
                  >
                    Sign Up
                  </Link>
            </li>
          </ul>
          <p className="text-card">LOGIN TO SHOE STORE</p>
          <div className="row">
            <div className="col-md-6">
              <form className="Login" onSubmit={submitHandler}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Login</button>
                <p>
                  <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : "/register"
                    }
                  >
                    Create Account
                  </Link>
                </p>
              </form>
            </div>
            <div className="col-md-6 otherSign flex flex-column">
              <p className="text-otherSign"> - OR SIGN IN WITH -</p>
              <hr className="solid"></hr>
              <button type="btn" className="btn btn-danger btn-google">
                <Link to="">
                  <i className="fab fa-google text-white"></i>
                </Link>{" "}
                Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
