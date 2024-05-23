export class AppError extends Error {
    constructor(message , statusCode){
       super(message) // take msg from Error
       this.statusCode =statusCode
    }
}