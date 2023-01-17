
export class Client {

 id: number;
 name: string;
 name__like: string;
 name__in: Array<string>;
 lastName: string;
 lastName__like: string;
 lastName__in: Array<string>;
 cin: string;
 cin__like: string;
 cin__in: Array<string>;
 phone: string;
 phone__like: string;
 phone__in: Array<string>;
 age: number;
 age__lt: number;
 age__gte: number;
 birthDate: Date;
 birthDate__lt: Date;
 birthDate__gte: Date;
 createdAt: Date;
 createdAt__lt: Date;
 createdAt__gte: Date;
 valid: null | boolean;
 order_by: Array<string>;


}