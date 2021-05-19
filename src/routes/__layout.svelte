<style>
    header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        padding-left: 4vw;
        padding-right: 4vw;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        margin: 5;
        font-weight: 400;
        font-size: 25px;
    }
</style>

<header>
    <h1>My Blog</h1>
    <nav>
        <a href="/">Home</a>
    </nav>
</header>
<slot></slot>