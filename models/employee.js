const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const avatarPath = path.join("/uploads/users/avatars");

const employeeSchema = new mongoose.Schema(
  {
    EmployeeName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", avatarPath));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

//Static methods
employeeSchema.statics.uploadedAvatar = multer({ storage: storage }).single(
  "avatar"
);
employeeSchema.statics.avatarPath = avatarPath;

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
