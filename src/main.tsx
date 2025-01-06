import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import config from '../amplify_outputs.json';  // Changed from ./amplify_outputs.json
import '@aws-amplify/ui-react/styles.css';
import App from './App';
import './index.css';

// Configure Amplify with the new format
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: config.data.url,
      region: config.data.aws_region,
      defaultAuthMode: config.data.default_authorization_type,
    }
  },
  Auth: {
    Cognito: {
      userPoolId: config.auth.user_pool_id,
      userPoolClientId: config.auth.user_pool_client_id,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authenticator>
    {({ signOut, user }: { signOut?: () => void, user?: any }) => (
      <App user={user} onSignOut={() => signOut?.()} />
    )}
    </Authenticator>
  </React.StrictMode>
);
