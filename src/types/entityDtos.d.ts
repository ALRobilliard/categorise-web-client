interface AccountDto {
  accountId: string;
  accountType: number;
  accountName: string;
  balance: number;
  createdOn: Date;
  limit: number;
  modifiedOn: Date;
}

interface UserDto {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}
