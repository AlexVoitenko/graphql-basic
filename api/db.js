const mongoose = require('mongoose');

// eslint-disable-next-line
const REMOTE_URL = 'mongodb://ask-apiko-user:ask-apiko-user-password@ds251807.mlab.com:51807/ask-apiko-api';

const LOCAL_URL = 'mongodb://localhost:27017';

mongoose.connect(REMOTE_URL);
