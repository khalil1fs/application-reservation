import {Categorie} from './categorie.model';

export class Chambre {

 id: number;
 categorie_id: number;
 categorie: Categorie;
 telephone: string;
 telephone__like: string;
 telephone__in: Array<string>;
 address: string;
 address__like: string;
 address__in: Array<string>;
 nbrLit: number;
 nbrLit__lt: number;
 nbrLit__gte: number;
 addedAt: Date;
 addedAt__lt: Date;
 addedAt__gte: Date;
 createdAt: Date;
 createdAt__lt: Date;
 createdAt__gte: Date;
 available: null | boolean;
 order_by: Array<string>;


}