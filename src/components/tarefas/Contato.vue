<template>
  <div>
      <v-list-item
      :class="{'blue lighten-4':contato.selecionado}"
      @click="contato.selecionado = !contato.selecionado"
      >
        <template v-slot:default="{}">
          <v-list-item-action>
            <v-checkbox :input-value="contato.selecionado"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{contato.nome}}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <!-- <v-btn
            icon
            @click.stop="handleRemoveContato(contato.id)"
            >
              <v-icon color="red  lighten-1">mdi-trash-can</v-icon>
            </v-btn>
            -->
            <ContatoMenu />   
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider> 
  </div>
</template>

<script>
import ContatoMenu from "./ContatoMenu.vue"
export default {
    components:{
      ContatoMenu
    },
    props:['contato'],
    methods:{
      handleRemoveContato(id){
        this.$store.commit('removeContato',id)
      }
    }
}
</script>

<style>

</style>