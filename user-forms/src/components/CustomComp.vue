<template>
  <div>
    <button @click="changeValue">Click</button>

    <input
      type="radio"
      value="one"
      :checked="'one' == picked"
      @change="picked = $event.target.value"
    />
    one
    <input
      type="radio"
      value="two"
      :checked="'two' == picked"
      @change="picked = $event.target.value"
    />
    two <br />{{ picked }}
    <input
      type="checkbox"
      :checked="alter"
      @change="alter = $event.target.checked"
    />
    {{ alter }}
    <hr />
    <!-- <div>
        <li v-for="car in cars" :key="car">
      <input
        type="radio"
        :value="car"
        :id="car"
        :checked="carName == car"
        @change="carName = $event.target.value"
      />
      <label :for="car">{{ car }}</label>
    </li>
    {{ carName }}
    </div> -->
    <br />
    <input type="text" :value="hobby" @input="hobby = $event.target.value" />
    {{
      hobby
    }}
    <div>
        {{selectedCars}}
        <li v-for="car in cars" :key="car">
            <input type="checkbox" :id="car" :value="car" v-model="selectedCars">
            <label :for="car">{{car }}</label>
        </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomComp",
  emits: ["update:modelValue"],
  props: ["modelValue"],
  data: function () {
    return {
      name: "ANuj Sharma",
      alter: false,
      picked: "",
      carName: "",
      cars: ["maruti", "verna", "centro", "baleno", "sunny", "ferrari"],
      hobby: "",
      selectedCars: [],
      carClicked: false
    };
  },
  methods: {
    changeValue: function () {
      this.$emit("update:modelValue", "it's over 9000");
    },
    myMethod: function (event) {
      this.alter = event.target.checked;
    },
    updateCheckbox(event, car) {

        if(event.target.checked) {
            this.selectedCars.push(car);
        } else {
            const index = this.selectedCars.findIndex(c => c==car);
            this.selectedCars.splice(index, 1);
        }
    }
  },
};
</script>