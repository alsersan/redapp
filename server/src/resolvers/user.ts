import { User } from '../entities/User';
import { MyContext } from '../types';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import * as argon2 from 'argon2';

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async registerUser(
    @Arg('username', () => String) username: string,
    @Arg('email', () => String) email: string,
    @Arg('password', () => String) password: string,
    @Ctx() { em }: MyContext
  ): Promise<User> {
    const hashedPassword = argon2.hash(password);
    const user = em.create(User, { username, email, password: hashedPassword });
    await em.persistAndFlush(user);
    return user;
  }
}
