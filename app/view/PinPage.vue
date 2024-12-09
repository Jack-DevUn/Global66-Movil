<template>
    <Page>
      <ActionBar title="Master" />
      <StackLayout>
        <Button text="To Details via method" @tap="goToDetailPage" />
      </StackLayout>
    </Page>
</template>

<script>
    export default {
        methods: {
            goToDetailPage() {
                 $goto('pin')
                }
        },
    }
</script>

