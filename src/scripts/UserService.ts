import { getUserById } from "./getUserByid";
import { memo } from "./decorators";

export class UsersService {
  @memo(1) // <- Implement This Decorator
  getUserById(id: number) {
    return getUserById(id);
  }
}
