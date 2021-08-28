//@ts-check
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import axios from "axios";

async function fetchQuery(request, variables, cacheConfig, uploadables) {
  const { data } = await axios.post("/graphql", {
    query: request.text,
    variables,
  });
  return data;
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
