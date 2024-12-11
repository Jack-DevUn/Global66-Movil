<template>
    <FlexboxLayout class="m-0 p-0">
      <!-- Estado 1: No tiene valor, mostrar una imagen -->
      <Label class="withoutValue mt-1"
        v-show="valueCom == null"
      />
  
      <!-- Estado 2: Tiene valor y el estado es visible, mostrar el valor -->
      <Label
        v-show="valueCom != null && isVisible "
        :text="valueCom" 
        class="valueView"
      /> 
  
      <!-- Estado 3: Tiene valor, pero no es visible, mostrar otra imagen -->
      <Label
      v-show="valueCom != null && !isVisible"
        class="withValue mt-1"
      />
    </FlexboxLayout>
  </template>
  
  <script>
  export default {
    name: "TextFieldConfirm",
    props: {
      isVisible: {
        type: Boolean,
        default: false,
      },
      valueCom: {
        type: [Number, String], 
        default: null, 
      },
    },
  };
  </script>

  <style scoped>
    .withValue {
      width: 80px; 
      height: 80px; 
      background-color:rgba(0, 182, 130, 1);
      clip-path: circle(50% at 50% 50%); 
    }
    .withoutValue{
      width: 80px; 
      height: 80px; 
      border-width: 7px; 
      border-color: #00a676; 
      clip-path: circle(50% at 50% 50%); 
      background-color: transparent; 

    }
    .valueView{
        color:rgba(0, 182, 130, 1);
        text-align: center;

      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      width: 80px; 
      height: 80px; 
      margin-top: 0;
      padding-top: 0;

    }

</style>