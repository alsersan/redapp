import { MikroORM } from '@mikro-orm/core';
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';

(async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const post = orm.em.create(Post, { title: 'First post' });
  await orm.em.persistAndFlush(post);
})();