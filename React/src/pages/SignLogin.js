import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UserContext"; // Import useUser hook
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "@fortawesome/fontawesome-free/css/all.css";

export default function SignLogin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { setUser } = useUser(); // Get setUser from context

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    const handleSignUpClick = () =>
      container.classList.add("right-panel-active");
    const handleSignInClick = () =>
      container.classList.remove("right-panel-active");

    if (signInButton && signUpButton && container) {
      signUpButton.addEventListener("click", handleSignUpClick);
      signInButton.addEventListener("click", handleSignInClick);
    }

    return () => {
      if (signInButton && signUpButton) {
        signUpButton.removeEventListener("click", handleSignUpClick);
        signInButton.removeEventListener("click", handleSignInClick);
      }
    };
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const { name, email, password, confirmPassword } = formData;
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    console.log("Validation Errors:", newErrors);

    setErrors(newErrors);

    if (!isValid) {
      console.log("Validation failed");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        {
          name,
          email,
          password,
        }
      );
      setUser(response.data); // Store user data in context
      console.log("Sign-up successful!", response.data);
      navigate("/");
    } catch (error) {
      console.error("Sign-up failed!", error);
      setErrors((prev) => ({
        ...prev,
        formError: error.response
          ? error.response.data.message
          : "An unknown error occurred",
      }));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const newErrors = { email: "", password: "" };

    if (!password) {
      newErrors.password = "Password is required";
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      setUser(response.data); // Store user data in context
      console.log("Login successful!", response.data);
      navigate("/");
    } catch (error) {
      console.error("Login failed!", error);
      setErrors((prev) => ({
        ...prev,
        formError: error.response.data.message || "An error occurred",
      }));
    }
  };

  return (
    <>
      <Nav />
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p style={{ color: "red", fontWeight: "bold", fontSize: 12 }}>
                {errors.email}
              </p>
            )}
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && (
              <p style={{ color: "red", fontWeight: "bold", fontSize: 12 }}>
                {errors.password}
              </p>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            {errors.confirmPassword && (
              <p style={{ color: "red", fontWeight: "bold", fontSize: 12 }}>
                {errors.confirmPassword}
              </p>
            )}
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p style={{ color: "red", fontWeight: "bold", fontSize: 12 }}>
                {errors.email}
              </p>
            )}
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && (
              <p style={{ color: "red", fontWeight: "bold", fontSize: 12 }}>
                {errors.password}
              </p>
            )}
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer name="footer-main" />
    </>
  );
}
