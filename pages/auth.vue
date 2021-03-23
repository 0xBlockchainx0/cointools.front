<template>
  <div class="container w-1/5 p-6 mx-auto shadow-md">
    <form @submit.prevent="userSignUp">
      <h2 class="mb-2 text-xl font-bold text-green-500">Sign Up</h2>

      <div class="mb-4">
        <label class="block mb-2 text-gray-500" for="email">Email</label>
        <input class="w-full px-2 py-1 border" type="text" id="email" v-model="email" />
      </div>

      <div class="mb-4">
        <label class="block mb-2 text-gray-500" for="password">Password</label>
        <input class="w-full px-2 py-1 border" type="password" id="password" v-model="password" />
      </div>

      <button class="w-full py-2 text-white uppercase bg-green-500 shadow">Sign Up</button>
    </form>
  </div>
</template>

<script>

export default {

  data: function() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    userSignUp: function(err) {
      this.$store
        .dispatch("auth/signUp", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.email = "";
          this.password = "";
          //if you wanted to redirect after sign in you'd do that here with this.$router.push('/pagename')
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>