<template>
    <FlexboxLayout
      class="transaction-item rounded-lg p-4 pt-1"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <!-- Información de la transacción -->
      <StackLayout>
        <Label :text="Commerce" class="text-lg font-normal" />
        <!-- <Label :text="amountCurrency" class="text-base text-gray-500" /> -->
      </StackLayout>
  
      <!-- Iconos de editar y eliminar -->
      <FlexboxLayout flexDirection="row" spaceX="4" >
        <!-- <Image src="~/Icons/Edit.png" width="16" height="16" stretch="aspectFill" class="mr-4" @tap="editCommerce" /> -->
        <Image src="~/Icons/Trash.png" width="18" height="18" stretch="aspectFit" class="mr-1" @tap="deleteCommerce" />
      </FlexboxLayout>
    </FlexboxLayout>
  </template>
<script>
import "intl"
const currencyFormater = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
});

export default{
    data() {
        return {
            
        }
    },
    props:{
        Commerce:{
            type:String,
            default:"Claro Servicios Tecnológicos"
        },
        Amount:{
            type:Number,
            default:0
        }
    },
    computed: {
      amountCurrency(){
        return currencyFormater.format(this.Amount);
      }
    },
    methods: {
      deleteCommerce(){
        console.log("deleteCommerce")
        this.$emit("showModal");
      },
      editCommerce(){
        this.$goto('pin', { props: { idCommerce: 1233 } });
      }
    },
}

</script>