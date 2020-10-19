import { Router } from 'express';
import path from 'path';
import fs from 'fs';

const router = Router();
const route = '/dishes';

router.get(route, (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'jsons', 'dishes.json'), (err, data) => {
    console.log(`GET: ${ route }`);
    res.json(JSON.parse(data.toString()));
  });
});

export default router;
