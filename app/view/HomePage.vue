<template>
  <page actionBarHidden="true" class="page pb-5">
    <Layout>
      <template v-slot:header>
        <Header />
      </template>
      <template v-slot:content>
        <Content />
      </template>
    </Layout>
  </page>
  </template>
  
  <script>
  import Layout from './LayoutHome.vue';
  import Header from '../components/Header/Index.vue';
  import Content from '../components/CommerceList/Index.vue';
  
  
  export default {
    name: 'Home',
    components: {
      Layout,
      Header,
      Content
    },
  };
  </script>
  