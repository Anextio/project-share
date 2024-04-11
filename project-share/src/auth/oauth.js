import { SvelteKitAuth } from "@auth/sveltekit";
import { getAuth, signInWithPopup } from "firebase/auth";
import { auth } from "$lib/firebase";
import { FirestoreAdapter } from "@auth/firebase-adapter"=
import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [
    GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
    Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        const credential = GoogleProvider.credentialFromResult(await signInWithPopup(auth, new GoogleProvider()));
        const token = credential.accessToken;
        // Save the token or perform additional actions
      }
      return true;
    },
  },
});