import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function DashBoardProtectedRoute({ children }) {
  const { user } = useAuth();

  if (user?.role !== "Admin") return <Navigate to="/" replace />;

  return children;
}


