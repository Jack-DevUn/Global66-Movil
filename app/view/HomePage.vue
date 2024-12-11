<template>
  <page actionBarHidden="true" class="page pb-5">
    <Layout>
      <template v-slot:header>
        <Header />
      </template>
      <template v-slot:content>
        <component :is="contentComponent" />
      </template>
    </Layout>
  </page>
  </template>
  
  <script>
  import Layout from './Layout.vue';
  import Header from '@/components/Header/Index.vue';
  import ContentCommerce from '@/components/CommerceList/Index.vue';
  //import ContentConfirmProcess from '@/components/ConfirmProcess/Index.vue';
  
  
  export default {
    name: 'Home',
    components: {
      Layout,
      Header
    },
    data() {
    return {
      contentComponent: ContentCommerce,
    };
  },
    props:['id'],
  methods: {
    changeContent(idCommerce) {
      if (idCommerce === undefined) {
        this.contentComponent = ContentCommerce;
      } else {
        //this.contentComponent = ContentConfirmProcess;
      }
     }
    },
    
  created() {
    try {
      console.log(this.id)
      console.log(this)
      const context = this.$router.prop;
     

      if (context && context.idCommerce != undefined) {
        this.changeContent(context.idCommerce);
        console.log("entra id commmerce")
      } else {
        console.log("entra No commerce")
        this.changeContent();
      }
    } catch (error) {
      console.error('Error al acceder al contexto:', error);
      this.changeContent(); 
    }
  } 
    
  };
  </script>
  