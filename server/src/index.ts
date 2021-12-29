import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';

(async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: 'redapp',
    type: 'postgresql',
    debug: !__prod__,
  });
})();
