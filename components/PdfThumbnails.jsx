import { getDocument } from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker.entry";

export const generateThumbnail = async (pdfUrl) => {
  try {
    const pdf = await getDocument(pdfUrl).promise;
    const page = await pdf.getPage(1);

    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport }).promise;

    return canvas.toDataURL("image/png"); // Returns Base64 image
  } catch (error) {
    console.error("Error generating thumbnail:", error);
    return null;
  }
};
