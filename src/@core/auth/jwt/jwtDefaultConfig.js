// ** Auth Endpoints
export default {
  loginEndpoint: 'https://api.bintangteknik.id/api/login',
  menuEndpoint: 'https://api.bintangteknik.id/api/menu',
  // loginEndpoint: '/jwt/login',
  registerEndpoint: '/jwt/register',
  refreshEndpoint: 'http://127.0.0.1:8000/api/refresh',
  logoutEndpoint: 'https://phpstack-736055-2465409.cloudwaysapps.com/api/logout',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
}
