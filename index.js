// Import library
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/routes');
// Inisialisasi aplikasi Express
const app = express();
dotenv.config();
//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
//Routing
app.use('/categories', routes);

// Menjalankan server pada port 3000
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
