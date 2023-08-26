<template>
  <div>
    <v-col
      cols="12"
    >
      <v-text-field
        v-model="Nome"
        label="Qual seu Nome?"
        outlined
        clearable
        @keyup.enter="handleAddContato"
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
    >
      <v-text-field
        v-model="Numero"
        label="Qual seu Numero?"
        outlined
        clearable
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
    >
      <v-text-field
        v-model="Email"
        label="Qual seu Email"
        outlined
        clearable
      ></v-text-field>
    </v-col>
    <v-btn block
    :class="{'blue lighten-2':true}"
    @click.stop="handleAddContato"
    >
        Cadastrar Contato
    </v-btn>
    <v-list
      flat
      subheader
    >

      <v-list-item-group
        multiple
        active-class=""
      >
      <div
        v-for="contato,index in $store.state.contatos"
        :key="index"
      >
        <Contato 
          :contato="contato"
        />
      </div>

      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Contato from '../components/tarefas/Contato.vue'
  export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',

    components: {
      Contato
    },
    data(){
      return{
        Nome: null,
        Numero: null,
        Email: null,
      } 
    },
    methods:{
      handleAddContato(){
        var cont = [this.Nome,this.Numero,this.Email]
        this.$store.commit('addContato',cont),
        this.Nome=null,
        this.Numero=null,
        this.Email=null;
      }
    }   
  }
</script>

