<script context="module">
    export async function load({fetch}) {
        const posts = await fetch("/index.json").then((r) => r.json())

        return {
            props: {posts}
        }
    }
</script>

<script>
    import PostCard from "/src/components/post-card.svelte";
    export let posts;
</script>

<style>
 main {
     padding: 4vw;
 }

 :global(article) {
     border-bottom: 1px solid lightgray;
 }
</style>

<svelte:head>
    <title>My Blog</title>
    <meta name="description" content="This is my personal blog created with SvelteKit!">
</svelte:head>

<main>
    <h1>Posts</h1>

    {#each posts as post}
        <PostCard {...post}/>
    {/each}
</main>
