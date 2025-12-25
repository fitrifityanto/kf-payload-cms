import * as migration_20251224_222510_init_uuid from './20251224_222510_init_uuid';

export const migrations = [
  {
    up: migration_20251224_222510_init_uuid.up,
    down: migration_20251224_222510_init_uuid.down,
    name: '20251224_222510_init_uuid'
  },
];
