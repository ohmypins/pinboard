import getContainer from 'utils/docker/getContainer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { service } = req.query;
  const [containerName] = service as string[];

  if (!containerName) {
    return res
      .status(400)
      .send({ error: 'Docker query parameters are required' });
  }

  try {
    const container = await getContainer(containerName);
    const stats = await container.stats({ stream: false });
    return res.status(200).json({ stats });
  } catch (err) {
    console.error('Error getting container stats', err);
    return res.status(500).send({ error: 'Internal error' });
  }
}
