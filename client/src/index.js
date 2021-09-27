import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./index.css";
import App from "./App";
import { offsetLimitPagination } from "@apollo/client/utilities";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					orders: offsetLimitPagination(),
				},
			},
		},
	}),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
