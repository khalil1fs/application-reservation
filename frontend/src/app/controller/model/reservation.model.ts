import {Client} from './client.model';
import {Chambre} from './chambre.model';

export class Reservation {

 id: number;
 client_id: number;
 client: Client;
 chambre_id: number;
 chambre: Chambre;
 reference: string;
 reference__like: string;
 reference__in: Array<string>;
 status: string;
 status__like: string;
 status__in: Array<string>;
 dayNumber: number;
 dayNumber__lt: number;
 dayNumber__gte: number;
 dateDebut: Date;
 dateDebut__lt: Date;
 dateDebut__gte: Date;
 dateFin: Date;
 dateFin__lt: Date;
 dateFin__gte: Date;
 valid: null | boolean;
 order_by: Array<string>;


}