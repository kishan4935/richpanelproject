import { Client,Account, ID } from "appwrite";

const client = new Client();

const account = new Account(client);

client.setEndpoint("http://localhost/v1").setProject("64fbf3ed4a338162a284");

export {account ,ID}