import multer from 'multer';
import path from 'path';

export default function (file_path, types = ['image/png', 'image/jpeg', 'image/jpg']) {
    const storage = multer.diskStorage({
        destination: (_, __, cb) => {
            cb(null, file_path);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
            cb(null, uniqueSuffix + path.extname(file.originalname));
        },
    });

    const fileFilter = (req, file, cb) => {
        if (types.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    };

    return multer({ storage, fileFilter });
}
