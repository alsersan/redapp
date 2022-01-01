import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[ts]s$/,
  },
  entities: [Post],
  dbName: 'redapp',
  type: 'postgresql',
  debug: !__prod__,
} as unknown as Parameters<typeof MikroORM.init>[0];
