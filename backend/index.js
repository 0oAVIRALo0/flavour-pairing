const express = require("express");
const axios = require("axios");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();
app.use(cors());

const port = 3000;

// Configure Puppeteer launch options
const puppeteerOptions = {
  headless: true,
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-accelerated-2d-canvas",
    "--disable-gpu",
  ],
};

// 1️⃣ Search entities endpoint
app.get("/fetch-entities", async (req, res) => {
  try {
    const { entity = "" } = req.query;
    const response = await axios.get(
      "https://cosylab.iiitd.edu.in/flavordb2/entities",
      {
        params: { entity },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      }
    );

    // Parse the response data
    const results = JSON.parse(response.data);

    res.json(results);
  } catch (error) {
    console.error("Search error:", error.message);
    res.status(500).json({ error: "Failed to fetch entities" });
  }
});

// 2️⃣ Food pairing analysis endpoint
// app.get("/fetch-food-pairing", async (req, res) => {
//   const { id } = req.query;

//   if (!id) {
//     return res.status(400).json({ error: "ID parameter is required" });
//   }

//   try {
//     const response = await axios.get(
//       "https://cosylab.iiitd.edu.in/flavordb2/food_pairing",
//       {
//         params: { id },
//         headers: {
//           "User-Agent":
//             "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
//           Accept: "application/json, text/javascript, */*; q=0.01",
//           "X-Requested-With": "XMLHttpRequest",
//           Referer: "https://cosylab.iiitd.edu.in/flavordb2/search",
//           DNT: "1",
//         },
//       }
//     );

//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching food pairing data:", error.message);
//     res.status(500).json({ error: "Failed to fetch food pairing data" });
//   }
// });

app.get("/fetch-food-pairing", async (req, res) => {
  console.log("HERE");
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "ID parameter is required" });
  }

  try {
    // Fetch food pairing data
    const response = await axios.get(
      "https://cosylab.iiitd.edu.in/flavordb2/food_pairing",
      {
        params: { id },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
          Accept: "application/json, text/javascript, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest",
          Referer: "https://cosylab.iiitd.edu.in/flavordb2/search",
          DNT: "1",
        },
      }
    );

    // Assuming response.data contains HTML content
    const htmlContent = response.data; // Make sure the response is in HTML format

    // Use Puppeteer to open a new tab and inject the HTML content
    const browser = await puppeteer.launch(puppeteerOptions);
    const page = await browser.newPage();

    await page.setContent(htmlContent); // Set the HTML content on the new page

    // Optionally, you can set the page to open a new tab in a real browser environment
    // Here, the Puppeteer browser is used just for rendering and can be discarded after
    // you may also consider saving a screenshot, or perform actions on this page.

    // You can take a screenshot or close the browser depending on the needs
    await page.screenshot({ path: "food-pairing.png" }); // Optional: Save screenshot

    // Close Puppeteer browser
    await browser.close();

    // Send a success response to the frontend with the URL or status
    res.json({
      message: "Food pairing data is processed and a new tab is opened",
      status: "success",
    });
  } catch (error) {
    console.error("Error fetching food pairing data:", error.message);
    res.status(500).json({ error: "Failed to fetch food pairing data" });
  }
});

app.get("/by-alias/:alias", async (req, res) => {
  const { alias } = req.params;

  if (!alias) {
    return res.status(400).json({ error: "Alias parameter is required" });
  }

  try {
    const response = await axios.get(
      `http://192.168.1.92:9207/api/food/by-alias/${encodeURIComponent(alias)}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          Accept: "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching food by alias:", error.message);
    res.status(500).json({ error: "Failed to fetch food by alias" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
