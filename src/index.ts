import * as execa from 'execa'
import { dirname, resolve } from 'path'

export const minerExecutablePath = resolve(__dirname, '../xmrig/build/xmrig')

export function startMiner(
  pool: string,
  username: string,
  password?: string,
  additionalArgs?: string[],
) {
  const args = [
    '-o',
    pool,
    '-u',
    username,
    '-k',
    '--donate-level=1',
    '--print-time=10',
    '--max-cpu-usage=95',
    ...(additionalArgs || []),
  ]
  if (password) {
    args.push('-p', password)
  }
  return execa(minerExecutablePath, args, {
    env: {
      LD_LIBRARY_PATH: `${process.env.LD_LIBRARY_PATH}:${resolve(
        dirname(minerExecutablePath),
        'lib',
      )}`,
    },
  })
}
