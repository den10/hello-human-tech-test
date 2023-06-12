import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Collection: {
      keyFields: ["id"],
    },
  },
});
