<template>
  <div>
    <contacts />
    <office />
    <communication />
  </div>
</template>

<script>
import Contacts from "@/components/Contacts";
import Office from "@/components/Office";
import Communication from "@/components/Communication";

export default {
  name: "index",

  components: {
    Contacts,
    Office,
    Communication
  }
};
</script>