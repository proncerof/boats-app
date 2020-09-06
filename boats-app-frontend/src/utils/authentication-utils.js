import JwtDecode from 'jwt-decode';

export function getAccessToken() {
  return sessionStorage.getItem('accessToken');
}

export function getDecodedToken() {
  return JwtDecode(getAccessToken());
}

export function isAccessTokenExpired() {
  if (!getAccessToken()) return true;
  return getDecodedToken().exp < new Date().getTime() / 1000;
}

export function isAuthenticated() {
  return !isAccessTokenExpired();
}

export function withAuth(headers = {}) {
  return () => ({
    ...headers,
    Authorization: `Bearer ${getAccessToken()}`,
  });
}
