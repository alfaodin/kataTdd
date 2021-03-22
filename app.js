import express from 'express';
import mongoose  from 'mongoose';
import middleware from './modules/middlewares/middleware';

const app = express();
const port = 3000

const prepare_app = () => {
  app.use(middleware);

  require('./modules/new_module/load_module').default(app);
}

const db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/kataTdd', {useNewUrlParser: true, useUnifiedTopology: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
  prepare_app();

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
});
