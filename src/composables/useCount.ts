import { ref } from 'vue'
export function useCount(): any {
    let count = ref<number | any>(0)
    function increment() {
        count += 1
    }
    function decrement() {
        count -= 1
    }
    return { increment, decrement, count}
}