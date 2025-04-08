import { Status } from './user-status.entity';

export class User {
  id: string;
  username: string;
  password: string;
  name?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
  status: Status;
}
