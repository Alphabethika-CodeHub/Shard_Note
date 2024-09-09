export type CreateUserParams = {
  clerkId: string;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
};
