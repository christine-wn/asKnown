<template>
    <teleport to="#modal">
        <div id="center" v-if="isOpen">
            <h2><slot>this is a modal</slot></h2>
            <button @click="buttonClick">Close</button>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        isOpen: Boolean,
    },
    emits: {
        'close-modal': null
    },
    setup(props, context) {
        const buttonClick = () => {
            context.emit('close-modal')
        }
        return {
            buttonClick
        }
    }
})
</script>
