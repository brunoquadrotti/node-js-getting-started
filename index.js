const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = 'api.fluig.local';
const cors = require('cors');

const UNIVERSO_API = 'https://universo.fluig.io';

app.use(cors());

app.use('/process-management/api/v2', createProxyMiddleware({
  target: UNIVERSO_API,
  changeOrigin: true
}));

// Start Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
