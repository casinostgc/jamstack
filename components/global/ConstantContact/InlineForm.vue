<script setup lang="ts">
useHead({
  script: [
    {
      src: "/constant-contact.js",
    },
    {
      id: "signupScript",
      src: "https://static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js",
      async: true,
      defer: true,
    },
  ],
});

defineProps<{
  formId: string;
}>();
</script>

<template>
  <v-card class="mb-4">
    <div class="ctct-inline-form" :data-form-id="formId"></div>
  </v-card>
</template>
