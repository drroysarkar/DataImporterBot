export default async function handler(req, res) {
  try {
    const response = await fetch("https://dataimporter-zk02.onrender.com/", {
      method: "GET",
      headers: {
        "User-Agent": "vercel-cron-keepalive"
      }
    });

    res.status(200).json({
      success: true,
      statusCode: response.status,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
