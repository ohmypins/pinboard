import type { NextApiRequest, NextApiResponse } from 'next';
import readYamlFile from 'utils/readYamlFile';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const boardsYaml = readYamlFile('boards/index.yaml');
  return res.json({ boardsYaml });
}
