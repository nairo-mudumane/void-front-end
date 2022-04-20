import { baseUrl } from ".";
import { IContact, IFetchedContacts, IFetchedData } from "../types";

export async function getAllContacts(): Promise<IContact[]> {
    return await baseUrl
        .get<IFetchedContacts>("/contacts")
        .then(({ data }) => {
            if (data.error) {
                throw new Error(data.message);
            }
            return data.data as unknown as IContact[];
        })
        .catch((err: Error) => {
            throw new Error(err.message);
        });
}

export async function getContactById(contactId: string): Promise<IContact> {
    return await baseUrl
        .get<IFetchedContacts>(`/contacts/${contactId}`)
        .then(({ data }) => {
            if (data.error) {
                throw new Error(data.message);
            }
            return data.data;
        })
        .catch((err: Error) => {
            throw new Error(err.message);
        });
}

export async function deleteContactById(contactId: string): Promise<void> {
    return await baseUrl
        .patch<IFetchedData>(`/contacts/${contactId}`)
        .then(({ data }) => {
            if (data.error) {
                throw new Error(data.message);
            }
            return;
        })
        .catch((err: Error) => {
            throw new Error(err.message);
        });
}

export async function createContact(contact: IContact): Promise<void> {
    return await baseUrl
        .post<IFetchedData>("/contacts", contact)
        .then(({ data }) => {
            if (data.error) {
                throw new Error(data.message);
            }
            return;
        })
        .catch((err: Error) => {
            throw new Error(err.message);
        });
}

export async function updateContact(contact: IContact): Promise<void> {
    return await baseUrl
        .patch<IFetchedData>(`/contacts/${contact.uid}`, contact)
        .then(({ data }) => {
            if (data.error) {
                throw new Error(data.message);
            }
            return;
        })
        .catch((err: Error) => {
            throw new Error(err.message);
        });
}
