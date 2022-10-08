import type { NextApiRequest, NextApiResponse } from 'next';
import readYamlFile from 'utils/readYamlFile';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const pinStoreYaml = readYamlFile('pins/pin-store.yaml');
  return res.json({ pinStoreYaml });
}
