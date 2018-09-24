<template>
  <div>
    <AppMain/>
  </div>
</template>

<script>
import AppMain from './views/AppMain'
export default {
  name: 'App',
  components: {
    AppMain
  }
}
</script>

<style>
.cl-primary {
  background-color: #FF99CC;
}
.card {
  border-radius: 4px;
}
.input.is-primary, .taginput .is-primary.taginput-container.is-focusable, .textarea.is-primary {
  border-color: #FF99CC;
  outline-color: #FF99CC;
}
.input.is-primary:focus, .taginput .is-primary.taginput-container.is-focusable:focus, .input.is-primary.is-focused, .taginput .is-primary.is-focused.taginput-container.is-focusable, .input.is-primary:active, .taginput .is-primary.taginput-container.is-focusable:active, .input.is-primary.is-active, .taginput .is-primary.is-active.taginput-container.is-focusable, .textarea.is-primary:focus, .textarea.is-primary.is-focused, .textarea.is-primary:active, .textarea.is-primary.is-active  {
  box-shadow: 0 0 0 0.125em rgba(209, 0, 174, 0.21);
}
.sweet-label {
  text-shadow: -1px 0 #FF99CC, 0 1px #FF99CC, 1px 0 #FF99CC, 0 -1px #FF99CC;
  color: #ffffff;
}
.button.is-primary {
  background-color: #FF99CC;
  font-weight: bold;
  width: 100%;
}
.button.is-primary:hover {
  background-color: rgb(248, 0, 124);
  font-weight: bold;
  width: 100%;
}
body::-webkit-scrollbar {
  display: none;
}
</style>
