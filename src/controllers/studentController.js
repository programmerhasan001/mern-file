const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "/files/"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

exports.upload = multer({ storage: storage });
exports.uploadPhoto = async (req, res) => {
  // console.log(req.file);
  res.json({ msg: "upload success", fileName: req.file.filename });
};
