<template>
    
      <StackLayout  class="p-5  h-full justify-center items-center w-full" >
        
          <Label text="Ingresa tu PIN" class="content-text text-center text-2xl font-bold mb-6" />
          <Label text="Usa tu PIN para confirmar el proceso" 
                 class="content-text text-center text-sm leading-tight m-1 mb-12 " textWrap="true" 
          />

          <FlexboxLayout class="h-9 justify-center items-center" flexDirection="row">
            
            <TextFieldConfirm
              v-for="(pin, index) in pinArray"
              :key="index"
              :valueCom="pinArray[index]" 
              :isVisible="isVisible"
              class="mx-4 text-2xl"
            />
          </FlexboxLayout>

          <!-- Teclado numérico -->
      <FlexboxLayout flexWrap="wrap"
        class="max-w-xs  h-full  pb-32 "
      >
        <!-- Números del teclado -->
        <label
          v-for="(number, index) in numbers"
          :key="index"
          :text="number"
          class="textFig text-center number" 
          @tap="addPin(number)"
        />

        <Image
        src="~/Icons/eye-slash.png"
        alt="Mostrar Valor"
        width="34"
        heigth="34"
        class="m-2 ml-12 text-5xl text-center number"
        @tap="toggleVisibility"


        />

        <label
          :text="0"
          class="textFig text-center" 
          @tap="addPin(0)"
          horizontalAlignment="center"
          verticalAlignment="center"
          style="width: 51.5%;"
        />


        <Image
        src="~/Icons/erase.png"
        alt="Borrar valor"
        width="34"
        heigth="34"
        class="m-2 ml-3 text-5xl text-center number"
        @tap="deletePin"



        />
      </FlexboxLayout>
  
        
      </StackLayout>
  
    
    
  </template>
  
  <script>
 import TextFieldConfirm from '../Inputs/TextFieldConfirm.vue';

  export default {
    data() {
      return {
        pinArray: [null, null, null, null], // Guarda los valores del PIN
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9], 
        isVisible: false
      };
    },
    components:{
      TextFieldConfirm
    },
    methods: {
      addPin(number) {
        // Agrega un número al PIN
        const index = this.pinArray.findIndex((value) => value === null);
        if (index !== -1) {
          this.$set(this.pinArray, index, number);
        }
        console.log(this.pinArray)
      },
      deletePin() {
        // Borra el último número ingresado
        const index = [...this.pinArray].reverse().findIndex((value) => value !== null);
        if (index !== -1) {
          const originalIndex = this.pinArray.length - 1 - index;
          this.$set(this.pinArray, originalIndex, null);
        }
      },
      toggleVisibility() {
        // Alternar visibilidad 
        this.isVisible = !this.isVisible;
      },
    },
  };
  </script>
  
  <style scoped>
    .number{
      width: 33.33%;
      border: 0;
    }

    .textFig{
      color: var(--color-content-content-default, #4F5694);
      text-align: center;

      font-family: Montserrat;
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: 50px; /* 125% */
    }
    
  </style>
  