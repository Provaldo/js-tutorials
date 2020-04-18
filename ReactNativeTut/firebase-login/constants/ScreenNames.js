
export const listScreens = {
  root: {
    name: "Root",
    login: "Login",
    home: "Home",
    signUp: "SignUp",
  },
  signIn: {
      name:'MainScreen',
      profile:'Profile',
      list:'ListUsers',
      main:'Main'

  }
};

export function switcherTitle(routeName) {

  switch (routeName) {
    case "Loginqqq":
      return "Login Page";
    case "Home":
      return "How to get started";
    case "SignUp":
      return "Sign Up";
    case "Load":
      return "Load Screen";
    case "Main":
      return "Log Out";
    case "Links":
      return "Links to learn more";
    case "Profile":
      return "Profile";
    case "ListUsers":
      return "List of Users";
  }
}

export default { switcherTitle, listScreens };
