import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Social = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const currentUser = user.email;
        console.log(currentUser);
        // Get JWT
        fetch(
          "https://genius-car-server-2i9prbc5j-paulbishwajit09-gmailcom.vercel.app/jwt",
          // "https://genius-car-server-neon.vercel.app/jwt",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // Local storage is the easiest but not the best option
            localStorage.setItem("genius-car-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div className="text-center">
        <hr />
        <p className="text-sm font-bolder mt-1">
          Member already ? Then login using
        </p>

        <button type="submit" onClick={handleGoogleSignIn}>
          <FaGoogle />
        </button>
      </div>
    </>
  );
};

export default Social;
