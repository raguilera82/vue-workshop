<template>
  <div class="home">
    <radh-d3></radh-d3>
    <Header message="Soy una prop"/>
    <QuestionBox/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import QuestionBox from '@/components/QuestionBox.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Header,
    QuestionBox
  }
}

</script>
