import type { NextApiRequest, NextApiResponse } from 'next';
import readYamlFile from 'utils/readYamlFile';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const boards = readYamlFile('boards/all.yaml');
  return res.json({ boards });
}
