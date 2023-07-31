import { ref } from "vue";
export default function useDebounce() {
  const timeout = ref("");

  function debounce(func, wait = 1000) {
    console.log("debounce");
    clearTimeout(timeout.value);
    timeout.value = setTimeout(func, wait);
  }

  return debounce;
}
