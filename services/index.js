import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHQL_ENDPOINT

export const getPosts = async () => {
	const query = gql`
		query myQuery {
			postsConnection {
				edges {
					node {
						createdAt
						slug
						title
						excerpt
						categories {
							name
							slug
						}
						author {
							name
							bio
							id
							photo {
								url
							}
						}
					}
				}
			}
		}
	`;


	const result = await request(graphqlAPI, query);

	return result && result.postConnection && result.postConnection.edges;
};
