<template>
    <header>
        <nav>
            <h2>
                <router-link to="/">Find A Coach</router-link>
            </h2>
            <div>
                <base-button to="/coaches" mode="outline" link>Coaches</base-button>
                <base-button to="/requests" mode="outline" link>Requests</base-button>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    background: var(--clr-primary);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1rem 2rem;
}

nav h2 {
    width: 30%;
    text-align: center;
    margin: 0;
}

h2 a {
    font-size: 2rem;
    padding: 0;
    font-weight: 700;
    text-decoration: none;
    color: var(--clr-text);
}

nav div {
    width: 70%;
    text-align: right;
    padding-right: 3rem;
}
</style>