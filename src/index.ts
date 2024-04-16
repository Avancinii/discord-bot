import config from "./config.json";
import { ExtendedClient } from "./structs/ExtendedClient";

const client = new ExtendedClient();

client.start();

export { client, config }