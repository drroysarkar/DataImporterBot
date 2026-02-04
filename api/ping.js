export default async function handler(req, res) {
  const timestamp = new Date().toISOString();

  console.log(`[PING] Vercel cron hit at ${timestamp}`);

  try {
    const response = await fetch(
      "https://dataimporter-zk02.onrender.com/health",
      {
        headers: {
          "User-Agent": "vercel-cron-keepalive"
        }
      }
    );

    console.log(
      `[PING] Render responded with status ${response.status} at ${timestamp}`
    );

    res.status(200).json({
      success: true,
      statusCode: response.status,
      timestamp
    });
  } catch (error) {
    console.error(
      `[PING] ERROR at ${timestamp}:`,
      error.message
    );

    res.status(500).json({
      success: false,
      error: error.message,
      timestamp
    });
  }
}
