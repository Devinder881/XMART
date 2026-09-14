import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

export default function CartProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
