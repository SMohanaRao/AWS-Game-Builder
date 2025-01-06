import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: 'Welcome to AWS Memory Game - Verify your email',
    },
    // Remove username and phone configurations since they're not needed
  }
});
