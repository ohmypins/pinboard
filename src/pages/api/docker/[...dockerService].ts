import getContainer from 'services/docker/getContainer';
import type { NextApiRequest, NextApiResponse } from 'next';

const SERVICES = {
  STATS: 'stats',
  STATUS: 'status',
};
const ALLOWED_SERVICES = [SERVICES.STATS, SERVICES.STATUS];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { dockerService } = req.query;
  const [service, containerName] = dockerService as string[];

  if (!ALLOWED_SERVICES.includes(service)) {
    return res.status(400).send({ error: 'Service not allowed' });
  }

  if (!containerName) {
    return res.status(400).send({ error: 'Container Name is required' });
  }

  try {
    let response = {};
    const container = await getContainer(containerName);

    if (service === SERVICES.STATS) {
      const stats = await container.stats({ stream: false });
      response = { stats };
    } else if (service === SERVICES.STATUS) {
      const info = await container.inspect();
      response = { status: info.State.Status };
    }

    return res.status(200).json(response);
  } catch (err) {
    console.error(`Error getting container ${service}`, err);
    return res.status(500).send({ error: 'Internal error' });
  }
}
