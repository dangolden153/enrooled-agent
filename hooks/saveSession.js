import { signIn } from "next-auth/client";

const saveSession = async (user, token) => {
  console.log(user, token);
  await signIn("credentials", {
    isLoggedIn: true,
    accessToken: token,
    user: JSON.stringify(user),
    redirect: false,
  });
  console.log("done");
};

export default saveSession;
