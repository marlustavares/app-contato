<template>
  <div>
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
        <v-icon>
            mdi-dots-vertical
        </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        >

        <v-icon left > {{ item.icone }} </v-icon>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditar 
    v-if="items[0].modal"
    @fechaModal="items[0].modal=false"
    :contato="contato"
    />
    <ModalDeletar 
    v-if="items[1].modal"
    @fechaModal="items[1].modal=false"
    :contato="contato"
    />
  </div>
</template>

<script>
import ModalDeletar from '../Modal/ModalDeletar.vue'
import ModalEditar from '../Modal/ModalEditar.vue'
  export default {
  props:[
      'contato'
  ],
  components: { ModalEditar, ModalDeletar },
    data: () => ({
      items: [
        { 
            icone:'mdi-pencil',
            title: 'Editar',
            modal:false,
            click(){
              console.log("editar")
              this.modal=true
            }
        },
        {
            icone:'mdi-trash-can',
            title: 'Deletar',
            modal:false,
            click(){
                this.modal=true
                console.log("Deletar")   
            }
        },
      ],
    }),
  }
</script>
<style>

</style>