import { User } from "../models/user";
import { IUser } from "../utils/user.interface";

class UserService {
  private user = User;

  async getUser(phoneNumber: string) {
    try {
      return this.user.findOne({
        phoneNumber: phoneNumber,
      });
    } catch (error: any) {
      throw error;
    }
  }

  async updateUser(payload: IUser) {
    try {
      // find user
      const existingUser = await this.user.findOne({
        phoneNumber: payload.phoneNumber,
      });
      if (existingUser) {
        // update: if user exist
        await this.user.updateOne(
          { phoneNumber: payload.phoneNumber },
          { $set: payload },
          {
            new: true,
          }
        );
        return;
      }
      // create: if user don't exist
      const user = await this.user.create(payload);
      return user;
    } catch (error: any) {
      throw error;
    }
  }
}

export default UserService;
