<template>
    <div>hello world</div>
    <label for="name">Name</label>
    <input type="text" id="name" />
</template>

<style scoped>
div {
    display: inline-block;
    margin: 3rem;
}
div::before {
    content: "";
    display: block;
    height: 5px;
    background-color: red;
}

label {
    display: block;
}

label::after {
    content: "Name is not valid";
    height: 5px;
    color: red;
    text-align: right;
}

input {
    width: 100%;
}
</style>