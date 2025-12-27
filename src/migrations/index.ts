import * as migration_20251227_030144 from './20251227_030144';

export const migrations = [
  {
    up: migration_20251227_030144.up,
    down: migration_20251227_030144.down,
    name: '20251227_030144'
  },
];
