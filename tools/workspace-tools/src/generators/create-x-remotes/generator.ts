import { createProjectGraphAsync, Tree } from '@nx/devkit';
import { Linter } from '@nx/linter';
import { remoteGenerator } from '@nx/react';
import * as path from 'path';
import { CreateXRemotesGeneratorSchema } from './schema';

export async function createXRemotesGenerator(
  tree: Tree,
  { x }: CreateXRemotesGeneratorSchema
) {
  const graph = await createProjectGraphAsync();
  let maxPort = 4200;
  for (const node in graph.nodes) {
    const port: number = graph.nodes[node].data.targets?.serve?.options?.port;
    if (port && port > maxPort) {
      maxPort = port + 1;
    }
  }
  for (let i = 0; i < x; i++) {
    await remoteGenerator(tree, {
      name: `remote-${maxPort}`,
      devServerPort: maxPort,
      e2eTestRunner: 'none',
      linter: Linter.EsLint,
      skipFormat: true,
      style: 'scss' as const,
      unitTestRunner: 'jest',
      host: 'store',
    });
    maxPort++;
  }
}

export default createXRemotesGenerator;
