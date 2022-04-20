import { IFetchedData } from ".";

export interface IContact {
    name: string;
    contact: string;
    uid: string;
}

export interface IFetchedContacts extends IFetchedData {
    data: IContact;
}
