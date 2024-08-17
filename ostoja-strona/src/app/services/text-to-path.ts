import opentype from "opentype.js";

export const textToPath = async (text: string, fontUrl: string) => {
  return new Promise<string>((resolve, reject) => {
    opentype.load(fontUrl, function (err, font) {
      if (err) {
        reject("Font could not be loaded: " + err);
      } else {
        const path = font?.getPath(text, 0, 80, 60);
        const svgPath = path?.toPathData(2); // Converts to SVG path with 2 decimal points

        if (!svgPath) {
          reject("Could not convert text to path");
        } else {
          resolve(svgPath);
        }
      }
    });
  });
};
