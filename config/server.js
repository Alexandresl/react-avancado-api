module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '620c9f4ca2b7a2fd5ac29009cc33f7e8'),
    },
  },
});
