import Docker from 'dockerode';

export default async function getContainer(containerName: string) {
  const docker = new Docker({ socketPath: '/var/run/docker.sock' });
  const containers = await docker.listContainers({ all: true });

  // Bad docker connections can result in a <Buffer ...> object?
  // In any case, this ensures the result is the expected array.
  if (!Array.isArray(containers)) {
    throw new Error('Docker query failed');
  }

  const containerNames = containers.map((container) =>
    container.Names[0].replace(/^\//, '')
  );
  const containerExists = containerNames.includes(containerName);
  if (!containerExists) {
    throw new Error('Container not found');
  }

  return docker.getContainer(containerName);
}
