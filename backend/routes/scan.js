import express from 'express';
import runLighthouse from '../services/lighthouseRunner.js';
import runAxe from '../services/axeRunner.js';
import Report from '../models/Report.js';

const router = express.Router();

const isValidUrl = (urlString) => {
  try {
    new URL(urlString);
    return true;
  } catch {
    return false;
  }
};

router.post('/', async (req, res) => {
  const { url } = req.body;

  if (!url || !isValidUrl(url)) {
    return res.status(400).json({ error: 'Invalid or missing URL' });
  }

  try {
    const lighthouseScore = await runLighthouse(url);
    const axeViolations = await runAxe(url);

    const report = new Report({ url, lighthouseScore, axeViolations });
    await report.save();

    res.json(report);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Scan failed' });
  }
});

export default router;
