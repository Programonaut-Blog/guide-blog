<script context="module">
    export async function load({fetch, page}) {
  
      const post = await fetch(`/posts/${page.params.url}.json`).then((r) => r.json())
  
      return {
          props: {post}
      }
    }
</script>

<style>
    :global(article) {
        padding: 4vw;
    }
</style>

<script>
    export let post;
</script>

<svelte:head>
    <title>{post.attributes.title}</title>
    <meta name="description" content={post.attributes.description}>
</svelte:head>
  
<article>
    <h1 class="section-header">{post.attributes.title}</h1>
    {@html post.html}
</article>
  
  