export interface Income {
    'incomeId'?: number,
    'userId': number,
    'incomeSourceId': number,
    'amount': number,
    'date': Date,
    'description': string,
    'createdAt': Date,
    'updatedAt': Date,
    'deletedAt': Date,
    'isDeleted': boolean,
    'incomeSourceName': string,
    'userName': string
}