type Env = {
  NAME: string;
  COGNITO_REGION: string;
  COGNITO_USER_POOL_ID: string;
  COGNITO_CLIENT_ID: string;
  API_GO_ENDPOINT: string;
  ENVCODE: string;
  TITLE: string;
};

type Envcode = 'local' | 'dev' | 'stg' | 'prd';
