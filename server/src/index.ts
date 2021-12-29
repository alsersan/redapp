import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';

(async () => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: 'redapp',
    type: 'postgresql',
    debug: !__prod__,
  });
})();
