import Login from "../../pages/login";
import Register from "../../pages/register";

// Routes List
const routesList = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "Login",
    component: Login,
  },
  {
    path: "Register",
    component: Register,
  },
];

export default routesList; // Export the List
