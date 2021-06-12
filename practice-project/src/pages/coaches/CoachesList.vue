<template>
  <section class="filters">
    <base-card></base-card>
  </section>
  <section>
    <base-card>
      <div class="actions">
        <base-button mode="outline">Refresh</base-button>
        <base-button mode="flat" link to="/register">Register as Coach</base-button>
      </div>

      <ul>
        <li v-for="n in 3" :key="n">{{ n }}</li>
      </ul>
    </base-card>
  </section>
</template>