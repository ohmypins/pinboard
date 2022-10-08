import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';

export default function readYamlFile(path: string) {
  const yamlPath = join(process.cwd(), path);

  if (!existsSync(yamlPath)) {
    const errorMsg = `Yaml file not found: ${yamlPath}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  try {
    return yaml.load(readFileSync(yamlPath, 'utf8'));
  } catch (err) {
    const errorMsg = 'Error reading file';
    console.error(errorMsg, err);
    throw new Error(errorMsg);
  }
}
