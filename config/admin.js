module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb5a1dce80e072a015e318dc9073fe0f'),
  },
});
