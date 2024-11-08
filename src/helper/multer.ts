import * as multer from 'multer';
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

export const publicStorage = multer.diskStorage({
  destination: 'public/docs',
  filename: (req, file, cb) => {
    const filename = file.originalname.split('.')[0];

    cb(null, `${filename}_${Date.now()}.pdf`);
  },
});
