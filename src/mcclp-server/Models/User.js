const mongoose = require('mongoose');
const {format} = require('date-fns');
const dateadded = format(new Date(), 'MM/dd/yyyy h:mm');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default:'User',
    enum: ['Admin', 'user', 'manager', 'lead', 'director', 'trainer', 'workforce','quality assurence']
  },
  profileimg: {
    type: String,
    default:'http://127.0.0.1:19/public/users_uploads/profile_images/default.png'
  },
  useradded: {
    type: String,
    default:`${dateadded}`
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;