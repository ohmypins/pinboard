import { existsSync } from 'fs';
import { cpu, drive, DriveInfo, mem, MemInfo } from 'node-os-utils';
import type { NextApiRequest, NextApiResponse } from 'next';

interface IResources {
  cpu?: { usage: number; load: number };
  drive?: DriveInfo;
  memory?: MemInfo;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResources>
) {
  const { type, target } = req.query;

  if (type === 'cpu') {
    return res.status(200).json({
      cpu: {
        usage: await cpu.usage(1000),
        load: cpu.loadavgTime(5),
      },
    });
  }

  if (type === 'disk') {
    const targetStr = (target as string) ?? '/';
    if (!existsSync(targetStr)) {
      return res.status(404).json({
        error: 'Target disk not found',
      });
    }

    return res.status(200).json({
      drive: await drive.info(targetStr),
    });
  }

  if (type === 'memory') {
    return res.status(200).json({
      memory: await mem.info(),
    });
  }

  return res.status(400).json({
    error: 'Invalid type',
  });
}
