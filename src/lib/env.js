const _env = typeof window !== 'undefined' && window._env ? window._env : process.env;
export default {
  API_ADDRESS: _env.REACT_APP_API_URL,
  WS_ADDRESS: _env.REACT_APP_WS_URL,
  NOVA_PROXY_ADDRESS: _env.REACT_APP_NOVA_PROXY_ADDRESS,
  NOVA_TOKEN_ADDRESS: _env.REACT_APP_NOVA_TOKEN_ADDRESS
};
