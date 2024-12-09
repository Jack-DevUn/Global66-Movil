<template>
    <Button
        class="text-xl rounded-xl shadow-none"

      :text="text"
      :class="buttonClass"
      @tap="emitAction"
    />
  </template>
  
  <script>
  export default {
    name: "ReusableButton",
    props: {
      text: {
        type: String,
        default: "Titulo",
      },
      variant: {
        type: String,
        default: "primary",
      }
    },
    computed: {
      buttonClass() {
        
        return this.variant === "primary"
          ? "bg-blue-600 text-white py-2 px-4 font-bold "
          : "border-2 border-blue-600 text-blue-600 py-2 px-4 font-bold bg-white";
      },
    },
    methods: {
      emitAction(){
        this.$emit("emitAction");
      }
    },
  };
  </script>
  