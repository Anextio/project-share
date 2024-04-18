// +page.server.js

import { authStore } from '$lib/stores/authStore';

export function load({ cookies }) {
  let user = null;

  // Get the user from the authStore
  const unsubscribe = authStore.subscribe((value) => {
    user = value;
  });

  unsubscribe();

  if (user && user.displayName && user.email) {
    // Set the cookie with the displayName and email
    cookies.set('user', JSON.stringify({ displayName: user.displayName, email: user.email }), {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  } else {
    // Remove the cookie if the user is not available or displayName or email is missing
    cookies.delete('user', { path: '/' });
  }

  const userCookie = cookies.get('user');
  const userData = userCookie ? JSON.parse(userCookie) : null;

  return {
    user: userData,
    loggedIn: !!user, // Add a loggedIn flag to indicate if the user is logged in
  };
}