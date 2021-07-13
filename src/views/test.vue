<script>
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
    props: {
        title: String
    },
    setup(props) {
        // const { title } = toRefs(props)
        // console.log(title.value)
        // 如果title是可选的prop,则传入的props中可能没有title.在这种情况下，toRefs将不会为title创建一个ref.你需要使用toRef代替它：
        
    },
})
</script>
