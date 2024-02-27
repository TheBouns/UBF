import { useSelector } from "react-redux";
const Profile = () => {
  const { user, unidades } = useSelector((state) => state.auth);
  console.log(user.message);
  return (
    <div>
      <h1>Zona Privada</h1>
      <p>{user.message}</p>
    </div>
  );
};

export default Profile;
