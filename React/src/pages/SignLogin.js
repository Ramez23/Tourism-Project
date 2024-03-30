import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    if (signInButton && signUpButton && container) {
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });

      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    }

    // Cleanup: remove event listeners when component unmounts
    return () => {
      if (signInButton && signUpButton) {
        signUpButton.removeEventListener("click", () => {
          container.classList.add("right-panel-active");
        });

        signInButton.removeEventListener("click", () => {
          container.classList.remove("right-panel-active");
        });
      }
    };
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Validate form data
    const { name, email, password, confirmPassword } = formData;
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Password validation
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return; // Exit the function early if form is not valid
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/signup",
        formData // Send the entire formData object in the request body
      );
      console.log("Sign-up successful!", response.data);
      navigate("/"); // Redirect to home page after successful sign-up
    } catch (error) {
      console.error("Sign-up failed!", error.response.data);
      // Handle specific error cases and update error state accordingly
      const { message } = error.response.data;
      if (message.includes("name")) {
        setErrors({ ...errors, name: message });
      } else if (message.includes("email")) {
        setErrors({ ...errors, email: "Email already exists" });
      } else if (message.includes("password")) {
        setErrors({ ...errors, password: message });
      } else if (message.includes("confirmPassword")) {
        setErrors({ ...errors, confirmPassword: message });
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Validate form data
    const { email, password } = formData;
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return; // Exit the function early if form is not valid
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        { email, password } // Send only email and password in the request body
      );
      console.log("Login successful!", response.data);
      navigate("/");
      // Handle successful login (e.g., store token, redirect to dashboard)
    } catch (error) {
      console.error("Login failed!", error.response.data);
      // Handle specific error cases and update error state accordingly
      const { message } = error.response.data;
      if (message.includes("email")) {
        setErrors({ ...errors, email: message });
      } else if (message.includes("password")) {
        setErrors({ ...errors, password: message });
      }
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
