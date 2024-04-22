import { a as authStore } from "../../../chunks/authStore.js";
function load({ cookies }) {
  let user = null;
  const unsubscribe = authStore.subscribe((value) => {
    user = value;
  });
  unsubscribe();
  if (user && user.displayName && user.email) {
    cookies.set("user", JSON.stringify({ displayName: user.displayName, email: user.email }), {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7
      // 7 days
    });
  } else {
    cookies.delete("user", { path: "/" });
  }
  const userCookie = cookies.get("user");
  const userData = userCookie ? JSON.parse(userCookie) : null;
  return {
    user: userData,
    loggedIn: !!user
    // Add a loggedIn flag to indicate if the user is logged in
  };
}
export {
  load
};
