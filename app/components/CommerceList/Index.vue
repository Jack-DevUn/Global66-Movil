<template>
    <FlexboxLayout class="justify-between h-full" flexDirection="column">
      <FlexboxLayout class="content-layout" flexDirection="column">
        
        <FlexboxLayout class="content-layout" flexDirection="column">
          <Label text="Gestionar mis comercios" class="content-text text-center text-2xl font-bold" />
          <Label text="Marcaste estos comercios como recurrentes al realizar un pago. Puedes modificar sus límites o eliminarlos." 
                 class="content-text text-center text-sm leading-tight m-1 " textWrap="true" 
          />
        </FlexboxLayout>
  
        <FlexboxLayout flexDirection="column" class="mt-6">
          <CommerceList v-for="{id,commerce,amount} in comerce" :key="id" :commerce="commerce" :Amount="amount" @showModal="openModal"></CommerceList>
        </FlexboxLayout>
      </FlexboxLayout>
  
      <StackLayout >
        <ButtonApi
          text="Volver"
          variant="segundary"
          :onClick="goBack"
        />
      </StackLayout>
    </FlexboxLayout>
    
  </template>
  
  <script>
  import CommerceList from './CommerceList.vue';
  import ButtonApi from '@/components/Inputs/Button.vue';
  import Modal from "@/components/Modal/ConfirmModal.vue";
  export default {
    name: 'Content',
    data() {
        return {
            comerce:[
                {
                    id:1,
                    commerce:"Claro Servicios Tecnológicos",
                    amount:100000
                },
                {
                    id:2,
                    commerce:"Bancolombia Tarjeta de Crédito",
                    amount:30000
                },
                {
                    id:3,
                    commerce:"Aval Pay Center",
                    amount:500000
                },
                {
                    id:4,
                    commerce:"Falabella Comercio Electrónico",
                    amount:1500
                },
                {
                    id:5,
                    commerce:"Alkosto Tarjeta de Crédito",
                    amount:129000
                },
                {
                    id:6,
                    commerce:"Exito Tarjeta de Crédito",
                    amount:1000000
                },
            ],
        }
    },
    components:{
        CommerceList,
        ButtonApi,
        Modal
    },
    methods: {
      openModal() {
        this.$showModal(Modal, {
            props: { id: 1 },
            animated: true,
          });
    }
    },
  };
  </script>