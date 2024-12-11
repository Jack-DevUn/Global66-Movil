<template>
    <page actionBarHidden="true" class="page pb-5">
      <Layout>
        <template v-slot:header>
          <Header />
        </template>
        <template v-slot:content>
          <ContentConfirmProcess />
        </template>
      </Layout>
    </page>
    </template>
    
    <script>
    import Layout from '@/view/Layout.vue';
    import Header from '@/components/Header/Index.vue';
    import ContentConfirmProcess from '@/components/ConfirmProcess/Index.vue';
    
    
    export default {
      name: 'Confirm',
      components: {
        Layout,
        Header,
        ContentConfirmProcess
      },
    }
    </script>
    