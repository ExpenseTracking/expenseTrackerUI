export interface Expense {
    'expenseId'?: number,
    'userId': number,
    'transactionTypeId': number,
    'amount': number,
    'date': Date,
    'description': string,
    'createdAt': Date,
    'updatedAt': Date,
    'deletedAt': Date,
    'isDeleted': boolean,
    'transactionTypeName': string,
    'userName': string
  }