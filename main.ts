// News-image entry (Node 22, standard library only): the image is held in
// this repository as base64 text (entry.png.b64) because the image itself is
// binary, and the program decodes it to /output/entry.png. The output bytes
// are exactly the infographic built by the agent session (see analysis/).
// Deterministic: the same input always produces the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const b64 = readFileSync(new URL('./entry.png.b64', import.meta.url), 'utf8');
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'), Buffer.from(b64, 'base64'));
