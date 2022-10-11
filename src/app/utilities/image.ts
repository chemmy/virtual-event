import { IMAGE_UPLOAD_TYPE } from "../constants/image";

export const convertCanvasToFile = (canvas: any): Promise<File> => {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob: any) => {
      if (!blob) reject(new Error("Canvas is empty"));
      resolve(blob);
    }, { type: IMAGE_UPLOAD_TYPE });
  });
}