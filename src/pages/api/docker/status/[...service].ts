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
    const info = await container.inspect();
    return res.status(200).json({ status: info.State.Status });
  } catch (err) {
    console.error('Error getting container status', err);
    return res.status(500).send({ error: 'Internal error' });
  }
}
