import express from 'express';
const router = express.Router();
import {getBook} from '../Controller/bookController.js';

router.route('/book').get(getBook);


export default router