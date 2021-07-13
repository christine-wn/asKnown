<template>
  <div id="app">
    <img src="Vue logo" alt="./assets/logo.png">
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <h1 v-if="loading">Loading!...</h1>
    <img v-if="loaded" :src="result[0].url" >
    <button @click="openModal">open modal</button>
    <Modal :isOpen="modalIsOpen" @close-modal="onModalClose">My Modal !!!</Modal>
    <h1>X: {{x}}, Y: {{y}}</h1>
    <button @click="increase">👍+1</button>
    <button @click="updateGreeting">🙋greetings</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, watch, onRenderTriggered, ref } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import GlobalHeader from './components/GlobalHeader.vue'
import userURLLoader from './hooks/useURLLoader'
import Modal from './components/Modal.vue'

interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: {
    name?: string
  }
}

interface DogResult {
  message: string;
  status: string;
}

interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
 
export default defineComponent({
  name:'App',
  components: {
    GlobalHeader,
    Modal
  },
  setup() {
    onRenderTriggered((event) => {
      console.log(event);
    })
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
        console.log('count ++ 了');
      },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })
    const {x, y} = useMousePosition()
    // https://dog.ceo/api/breeds/image/random  //dog pictrue
    const {result, loading, loaded} = userURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    watch(result, () => {
      if(result.value) {
        console.log('value', result.value[0].url);
      }
      
    })
    const greetings = ref('')
    const updateGreeting = () => {
      greetings.value += 'hello! '
    }
    watch([greetings, () => data.count], (newValue, oldValue) => {
      console.log('old', oldValue);
      console.log('new', newValue);
      document.title = 'updated' + greetings.value
    }) 
    const refData = toRefs(data)
    const modalIsOpen = ref(false)
    const openModal = () => {
      modalIsOpen.value = true
    }
    const onModalClose = () => {
      modalIsOpen.value = false
      console.log('close close close');
    }
    return {
      ...refData,
      greetings,
      updateGreeting,
      x,
      y,
      result,
      loading,
      loaded,
      modalIsOpen,
      openModal,
      onModalClose
    }
  }
})
</script>


<style lang="less">
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
</style>
