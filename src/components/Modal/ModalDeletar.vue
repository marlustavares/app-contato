<template>
  <div>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Excluir
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text
        class="mt-2"
        >Tem certeza que deseja excluir o contato?</v-card-text>
        
        </v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('fechaModal')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="handleDeletar()"
          >
            Excluir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props:[
        'contato'
    ],
    data () {
      return {
        dialog: true,
      }
    },
    methods:{
        handleDeletar(){
            this.$store.commit('removeContato',this.contato.id);
            this.$emit('fechaModal');
        }
    }
  }
</script>

<style>

</style>