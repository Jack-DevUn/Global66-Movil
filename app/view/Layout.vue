<template>
    <FlexboxLayout  flexDirection="column" class="h-full">

      <!-- Slot para el encabezado -->
      <FlexboxLayout class="header w-auto h-20 m-4  " >
        <slot name="header"></slot>
      </FlexboxLayout>
  
      <!-- Slot para el contenido principal -->
      <FlexboxLayout class="content">
        <slot name="content"></slot>
      </FlexboxLayout>

      
    </FlexboxLayout>
  </template>
  
  <script>
  export default {
    name: 'LayoutHome',
  };
  </script>
