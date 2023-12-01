
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: "p5wzwa9p",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-08-05",
    token: "skRcYgzq19M9tttVoC7X6Msqr2TqkNUND2u8vqaqb9JTUOkUoT8z7c7ohE5gYHkO4GgWP0nPoAMYXUU46RFD18WR4XVBcvbmL8FAa92XGMcnEFtl56kj6t5DdSlZtWG0umuiKPRmaXCxAahAt4sk1jBYy5PEWiBXSg6FFaxOE3xuDP7kFwWX"
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);
