<template>
  <FlexboxLayout
    class="header items-center "
    flexDirection="row"
  >
    <!-- Botón para ir hacia atrás -->
    <Label
      text="<" 
      class="text-4xl cursor-pointer font-light"
      @tap="this.$navigateBack()"
    />

    <!-- Espacio para centrar el contenido -->
    <FlexboxLayout flexGrow="1" justifyContent="center">
      <slot />
    </FlexboxLayout>
  </FlexboxLayout>
</template>

<script>
export default {
  name: 'Header',
};
</script>