import { MikroORM } from '@mikro-orm/core';
import mikroConfig from './mikro-orm.config';

(async () => {
  const orm = await MikroORM.init(mikroConfig);
})();
