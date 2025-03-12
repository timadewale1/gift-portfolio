import pdf from "pdf-thumbnail";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { filename } = req.query;

  if (!filename) {
    return res.status(400).json({ error: "Missing filename parameter" });
  }

  try {
    // Define the path to the PDF file
    const pdfPath = path.join(
      process.cwd(),
      "public",
      "certificates",
      filename
    );

    // Check if the file exists
    if (!fs.existsSync(pdfPath)) {
      return res.status(404).json({ error: "File not found" });
    }

    // Read the PDF file
    const pdfBuffer = fs.readFileSync(pdfPath);

    // Generate the thumbnail
    const thumbnail = await pdf(pdfBuffer);

    // Set response headers for an image
    res.setHeader("Content-Type", "image/png");
    res.send(thumbnail);
  } catch (error) {
    console.error("Error generating thumbnail:", error);
    res.status(500).json({ error: "Failed to generate thumbnail" });
  }
}
