<template>
  <div>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text
        class="mt-2"
        >Informe o novo Nome do Contato</v-card-text>
        <v-text-field
            class="px-3"
            label="Nome"
            outlined
            v-model="nome"
        ></v-text-field>
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
            @click="handleEditar()"
          >
            Editar
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
        nome:null
      }
    },
    created(){
        this.nome = this.contato.nome,
        this.numero = this.contato.numero,
        this.email = this.contato.email
    },
    methods:{
        handleEditar(){
            let novoContato={
                nome : this.nome,
                id:this.nome.id
            }
            this.$store.commit('editaContato',novoContato) ;
            this.$emit('fechaModal');
        }
    }
  }
</script>

<style>

</style>