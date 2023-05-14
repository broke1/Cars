
<template>
  <section class="main_section">
    <div class="main_section_container">
      <div 
        class="main_section_container_page_title"
        :class="{ main_section_container_page_title__show: title.show }"
      >
        {{ title.name }}
      </div>
      <div class="main_section_container_page_body">
        <div class="main_section_container_page_body_row">
          <div class="main_section_container_page_body_row_index, main_section_container_page_body_row_item">
            {{ 1 }}
          </div>
          <div class="main_section_container_page_body_row_login, main_section_container_page_body_row_item">
            {{ "broke" }}
          </div>
          <div class="main_section_container_page_body_row_btn, main_section_container_page_body_row_item">
            {{ "Поехали" }}
          </div>
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
      },
      playersData: []

    } 
  },
  methods: {
    
  },
  mounted() {
    setTimeout( () => {
      this.title.show = true
    },1000)
    this.$store.getters.getPlayersData().then( res => {
      this.playersData = res
    })
  } 
  
}

</script>

<style lang="sass" scoped>
    @import "./mainPage.sass"
</style>