<script>
    export let title;
    export let description;

    export let url;
</script>

<a href={url}>
    <article>
        <h1>{title}</h1>
        <p>{description}</p>
    </article>
</a>