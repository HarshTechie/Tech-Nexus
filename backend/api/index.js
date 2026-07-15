// Vercel serverless entry point for the Express API.
//
// Vercel runs the app as a serverless function rather than a long-lived
// `app.listen` process (that lives in ../server.js for local/Render use).
// We reuse the same Express app and simply make sure MongoDB is connected
// before handing the request off. `connectDB` already caches the live
// connection, so warm invocations skip the reconnect.
const app = require('../app');
const { connectDB } = require('../models');
const logger = require('../utils/logger');

// Cache the in-flight/settled connection promise across warm invocations.
let dbReady = null;

const ensureDb = () => {
  if (!dbReady) {
    dbReady = connectDB().catch((error) => {
      // Reset so the next invocation retries instead of reusing a failed promise.
      dbReady = null;
      throw error;
    });
  }
  return dbReady;
};

module.exports = async (req, res) => {
  try {
    await ensureDb();
  } catch (error) {
    logger.error('Serverless DB connection failed', error.message);
    res.status(503).json({ error: 'Service unavailable: database connection failed' });
    return;
  }
  return app(req, res);
};
