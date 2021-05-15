import { convertMarkdown } from "$lib/handle-markdown"

export function get({ params }) {

    const {url} = params;
    const post = convertMarkdown(`src/posts/${url}.md`)
    let body = JSON.stringify(post);

    return {body}
}