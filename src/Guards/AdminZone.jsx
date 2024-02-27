import { Navigate } from "react-router-dom";

const AdminZone = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.user.role)
  return user?.user.role == 'Admin' ? children : <Navigate to="/" />;
};

export default AdminZone;