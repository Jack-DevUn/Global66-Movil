<template>
    <Page class="w-96">
      <StackLayout class=" justify-center items-center p-5">
        
        <Image src="~/Icons/Info.png" width="64" height="64" stretch="aspectFill" class="m-1 mb-3" />
        
        
        <Label class="text-xl font-bold text-center  mb-2" text="¿Quieres eliminar comercio?" />
  
        
        <Label
          class="text-base text-center  mb-6 px-4 leading-tight"
          text="Si eliminas el comercio recurrente ya no se realizará la transacción automática."
          textWrap="true" 

        />
  
        
        <StackLayout class="flex-row justify-center ">
          
          <ButtonApi
          text="Conservar comercio"
          variant="segundary"
          @emitAction="closeModal"
          
        />
  
          
          <ButtonApi
          text="Eliminar comercio"
          variant="primary"
          @emitAction="confirmAction"
          
        />
        </StackLayout>
      </StackLayout>
    </Page>
  </template>
  
  <script>
  import ButtonApi from '@/components/Inputs/Button.vue';
  export default {
    components:{
        ButtonApi,
    },
    methods: {
      closeModal() {
        console.log("Comercio eliminado");
        this.$modal.close();
      },
      confirmAction(){
        this.$goto('home', {props:{ id:1234 }})
        this.$modal.close();
      }


    },
    data() {
      return {
        
      }
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos personalizados adicionales si lo necesitas */
  </style>
  
  
  <style scoped>
    .page{
    color:rgba(65, 71, 123, 1);
    font-family: 'Montserrat';
    }
 
  </style>
  
  