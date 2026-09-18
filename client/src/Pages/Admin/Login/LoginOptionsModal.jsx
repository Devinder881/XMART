import { createPortal } from "react-dom";
import "./style.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { login, signup } from "../../../Services/api";
import { useAuth } from "../../../Components/Context/AuthContext";
import { useModal } from "../../../Components/Context/ModalContext";

export default function Login_Options_Modal() {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login: loginContext } = useAuth();
  const { loginOpen, closeLogin } = useModal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const requestFn = isSignupMode ? signup : login;
      const payload = isSignupMode
        ? input
        : { email: input.email, password: input.password };

      const response = await requestFn(payload);

      loginContext(response.data.user, response.data.token);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (!loginOpen) return null;

  return createPortal(
    <div className="windowOverlay" onClick={closeLogin}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2 className="loginForm-title">
            {isSignupMode ? "Create XMART Account" : "Login to XMART"}
          </h2>

          <div
            className={`form-group name-field ${isSignupMode ? "visible" : ""}`}
          >
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your name"
              required={isSignupMode}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={input.password}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your password"
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-toggle-icon"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            </div>
          </div>

          {error && <div className="auth-error">{error}</div>}

          <div className="auth-button-track">
            <button
              type="submit"
              disabled={loading}
              className={`form-submit login-btn ${isSignupMode ? "shrink-out" : ""}`}
            >
              {loading && !isSignupMode ? "Logging in..." : "Login"}
            </button>
            {isSignupMode && (
              <button
                type="submit"
                disabled={loading}
                className="form-submit signup-btn slide-in"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
            )}
          </div>

          <p className="auth-toggle-text">
            {isSignupMode
              ? "Already have an account? "
              : "Don't have an account? "}
            <span
              onClick={() => {
                setIsSignupMode(!isSignupMode);
                setError("");
              }}
              className="auth-toggle-link"
            >
              {isSignupMode ? "Login" : "Create Account"}
            </span>
          </p>

          <div className="warningConatiner">
            <div className="warning">
              Important! Please note down your password — Human brain has good
              capability of forgetting things.
            </div>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}
