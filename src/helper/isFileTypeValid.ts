import * as path from 'path';

export const isFileTypeValid = (
  file: Express.Multer.File,
  cb: (...args: any[]) => void,
) => {
  const hasValidType = /pdf/.test(
    path.extname(file.originalname.toLowerCase()),
  );
  const hasValidMime = /pdf/.test(file.mimetype);

  if (hasValidType && hasValidMime) {
    return cb(null, true);
  } else {
    cb(new Error('File is not valid!'));
  }
};
