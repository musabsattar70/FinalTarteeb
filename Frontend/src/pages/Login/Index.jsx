import { useNavigate } from "react-router-dom";
import HuLogo from "../../assets/HuLogo.png";

import { PAGE_ROUTES } from "../../constants/PageRoutesPath";

export const Login = () => {
  const navigator = useNavigate();

  if (localStorage.getItem("token")) {
    window.location.href = "/";
  }

  const hanldeSubmit = async (e) => {
    e.preventDefault();

    const username = document.getElementById("username_login").value;
    const password = document.getElementById("password_login").value;

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/admin/LoginAdmin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      }
    );

    try {
      const json = await response.json();

      if (!response.ok) {
        alert(json.Message);
      } else {
        localStorage.setItem("token", json.Token);
        navigator(PAGE_ROUTES.DASHBOARD);
      }
    } catch (e) {
      alert("Something went wrong");
    }
  };

  return (
    <section className="login_section">
      <div className="login_sidebar">
        <div className="login_component">
          <img src={HuLogo} alt="HU Logo" />

          <form onSubmit={hanldeSubmit}>
            <h1>TARTEEB</h1>

            <div className="input_wrapper">
              <input
                type="text"
                placeholder="Username"
                id="username_login"
                name="username_login"
              />
              <span>e.g aa07182</span>
            </div>

            <div className="input_wrapper">
              <input
                type="password"
                placeholder="Password"
                id="password_login"
                name="password_login"
              />
              <span>Type HU account password</span>
            </div>

            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </section>
  );
};
