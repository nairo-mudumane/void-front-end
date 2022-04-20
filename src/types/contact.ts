import { IFetchedData } from ".";

export interface IContact {
    name: string;
    contact: number;
    uid?: string;
}

export interface IFetchedContacts extends IFetchedData {
    data: IContact;
}
