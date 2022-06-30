import {inviteDetailsRouter} from './routes/inviteDetailsRouter';
const bodyParser = require('body-parser');
const cors = require('cors');
import express from 'express';
import dotenv from'dotenv';

const lpExpress = express();
dotenv.config();

lpExpress.use(cors());
lpExpress.use(bodyParser.json());
lpExpress.use('/', inviteDetailsRouter);

lpExpress.listen(8080, '0.0.0.0', () => {
  console.log(`LP Express is listening on port:  ${process.env.PORT!}`);
});
