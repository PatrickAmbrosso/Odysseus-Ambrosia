<!-- ContactForm.vue -->
<template>
    <form class="contact-form" @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      
      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>
      
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      submitForm() {
        // Logic to handle form submission
        console.log('Form submitted:', this.name, this.email, this.message);
      }
    }
  };
  </script>
