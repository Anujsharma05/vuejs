<template>
  <section class="filters">
    <base-card></base-card>
  </section>
  <section>
    <base-card>
      <div class="actions"></div>

      <ul>
        <li v-for="n in 3" :key="n">{{ n }}</li>
      </ul>
    </base-card>
  </section>
</template>