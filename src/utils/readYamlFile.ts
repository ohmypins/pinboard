import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';

/**
 * Receive a file path to read from the root base path
 * @param path Path of the YAML file to read
 * @returns The parsed file content
 */
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
