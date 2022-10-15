<template>
<form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !firstname.isValid }">
        <label for="firstname">Firstname</label>
        <input type="text" id="firstname" v-model.trim="firstname.val" @blur="checkValidity('firstname')" />
      </div>
      <div class="form-control" :class="{ invalid: !lastname.isValid }">
        <label for="lastname">Lastname</label>
        <input type="text" id="lastname" v-model.trim="lastname.val" @blur="checkValidity('lastname')" />
      </div>
      <div class="form-control" :class="{ invalid: !rate.isValid }">
        <label for="rate">Hourly Rate($/hour)</label>
        <input type="number" placeholder="Number only" id="rate" v-model.number="rate.val" @blur="checkValidity('rate')" />
      </div>
      <div class="form-control" :class="{ invalid: !description.isValid }">
        <label for="description">Description</label>
        <textarea id="description" rows="5" v-model.trim="description.val" @blur="checkValidity('description')"></textarea>
      </div>
      <div class="form-control">
        <fieldset :class="{ 'invalid-fieldset': !areas.isValid }">
          <legend>Areas of Expertise:</legend>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="frontend"
              v-model="areas.val"
              value="frontend"
              @change="checkValidity('areas')"
            />
            <label for="frontend">Frontend Development</label>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="backend"
              v-model="areas.val"
              value="backend"
               @change="checkValidity('areas')"
            />
            <label for="backend">Backend Development</label>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="career"
              v-model="areas.val"
              value="career"
               @change="checkValidity('areas')"
            />
            <label for="career">Career Advisory</label>
          </div>
        </fieldset>
      </div>
      <div class="form-action">
          <base-button mode="flat">Submit</base-button>
      </div>
    </form>
</template>

<script>
export default {
    emits: ['form-data'],
    data() {
        return {
            formIsValid: true,
            firstname: {
                val: '',
                isValid: true
            },
            lastname: {
                val: '',
                isValid: true
            },
            rate: {
                val: null,
                isValid: true
            },
            description: {
                val: '',
                isValid: true
            },
            areas: {
                val: [],
                isValid: true
            },

        }
    },
  methods: {
    validateForm() {
        this.formIsValid = true;

        if(this.firstname.val === '') {
            this.formIValid = false;
            this.firstname.isValid = false;
        }
        if(this.lastname.val === '') {
            this.formIsValid = false;
            this.lastname.isValid = false;
        }
        if(!this.rate.val) {
            this.formIsValid = false;
            this.rate.isValid = false;
        }
        if(this.description.val === '') {
            this.formIsValid = false;
            this.description.isValid = false;
        }
        if(this.areas.val.length === 0) {
            this.formIsValid = false;
            this.areas.isValid = false;
        }
    },
    submitForm() {
        this.validateForm();
        const coach = {
            firstname: this.firstname.val,
            lastname: this.lastname.val,
            rate: this.rate.val,
            desc: this.description.val,
            areas: this.areas.val
        };

        this.$emit('form-data', coach);
    },
    checkValidity(input) {
        if((input==='firstname' || input==='lastname' || input==='description') && this[input].val==='') {
            this[input].isValid = false;
            this.formIsValid = false;
        } else if(input==='rate' && !this[input].val) {
            this[input].isValid = false;
        } else if(input === 'areas' && this[input].val.length === 0) {
            this[input].isValid = false;
        } else {
            this[input].isValid = true;
        }
    }
  }
};
</script>

<style scoped>
label {
    display:block;
    margin-bottom: 0.3rem;
    font-weight: bold;
    position: relative;
}
input:not([type="checkbox"]), 
textarea {
    display: block;
    width: 100%;
    border-radius: 10px;
    padding: 0.3rem 1rem;
    outline: 1px solid var(--clr-primary);
    border: none;
    font-size: 1rem;
    position: relative;
}

input:not([type="checkbox"]):focus, 
textarea:focus {
    outline: 2px solid #bdf297;
}

.form-control {
    margin: 1rem 0;
}

legend {
    font-weight: bold;
}

.checkbox-wrapper {
    margin: 1rem 0;
}

.checkbox-wrapper label {
    display: inline-block;
    margin-left: 0.5rem
}

.checkbox-wrapper label:hover {
    color: var(--clr-secondary);
    cursor: pointer;
}

.invalid label {
    color: red;
}

.invalid label::after {
    content: "This field cannot be Empty";
    position: absolute;
    right: 0;
    color: var(--clr-text);
}

.invalid input,
.invalid textarea,
.invalid input:focus,
.invalid textarea:focus {
    outline: 1px solid red;
}

.invalid-fieldset {
    border: 1px solid red;
    position: relative;
}

.invalid-fieldset::after {
    content: "Select atleast one area";
    color: var(--clr-text);
    display: block;
    position: absolute;
    top:0;
    right: 10px;
    font-weight: bold;
}

.invalid-fieldset legend {
    color: red;
}

</style>