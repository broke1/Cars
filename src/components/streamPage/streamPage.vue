
<template>
  <section class="stream_section">
    <div class="stream_section_container">
      <div 
        class="stream_section_container_page_title"
        :class="{ stream_section_container_page_title__show: title.show }"
      >
        <span>
          {{ title.name }}
        </span>
      </div>
      <div class="stream_section_container_page_body">
        <div class="stream_section_container_page_body_frame">
          <iframe src="/iframepage" height="100%" width="100%"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script> 

export default {
  props: {

  },
  data () {
    return {
      title: {
        name: "Cars Project",
        show: false,
      }
    } 
  },
  methods: {
  },
  mounted() {
    setTimeout( () => {
      this.title.show = true
    },500)
  } 
  
}

</script>

<style lang="sass" scoped>
    @import "./streamPage.sass"
</style>