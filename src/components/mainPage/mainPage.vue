
<template>
  <section class="main_section">
    <div class="main_section_container">
      <div 
        class="main_section_container_page_title"
        :class="{ main_section_container_page_title__show: title.show }"
      >
        <span>
          {{ title.name }}
        </span>
      </div>
      <div class="main_section_container_page_body">
        <div 
          v-for="(player, index) in playersData" 
          :key="index"
          class="main_section_container_page_body_row" 
          :class="{ main_section_container_page_body_row__show: playersBlockShow }"
          :style="{transitionDelay: `${index*150}ms`}"
        >
          <div class="main_section_container_page_body_row_index, main_section_container_page_body_row_item">
            {{ index + 1 }}
          </div>
          <div class="main_section_container_page_body_row_login, main_section_container_page_body_row_item">
            {{ player.login }}
          </div>
          <div class="main_section_container_page_body_row_btn, main_section_container_page_body_row_item">
            <div 
              class="main_section_container_page_body_row_btn_inside"
              :class="{ main_section_container_page_body_row_btn_inside__active: player.ready }"
              @click="moveToStream"
            >
              <span>
                {{ "Поехали" }}
              </span>
            </div>
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
      playersData: [],
      playersBlockShow: false

    } 
  },
  methods: {
    getPlayersDataLocal: function(delay)  {
      this.playersBlockShow = false
      setTimeout( () => {
        this.$store.getters.getPlayersData().then( res => {
          if (delay == 1200) res[4].ready = true
          res.sort((a, b) => b.ready - a.ready)
          this.playersData = res
          setTimeout( () => {
            this.playersBlockShow = true
          },100)
          
        })
      },delay)
    },
    moveToStream: function() {
      this.$router.push({ path: "/streampage" }) 
    }
    
  },
  mounted() {
    setTimeout( () => {
      this.title.show = true
    },500)
    this.getPlayersDataLocal(700)
    setTimeout( () => {
      this.getPlayersDataLocal(1200)
    },2000)
  } 
  
}

</script>

<style lang="sass" scoped>
    @import "./mainPage.sass"
</style>