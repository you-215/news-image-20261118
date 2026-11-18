// This entry's picture is the one-page news summary for Wednesday 18 November 2026 —
// six stories from that day, drawn beside this file as entry.png. The program only
// copies that image into the grader's output folder, byte for byte. Node 22,
// standard library only, no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
