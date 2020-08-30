<template>
  <div class="home">
    <Greeting />
  </div>
</template>

<script>
// @ is an alias to /src
import Greeting from "@/components/Greeting";

export default {
  name: "Home",
  components: {
    Greeting
  }
};
</script>
