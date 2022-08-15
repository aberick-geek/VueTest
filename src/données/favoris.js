import { reactive } from "vue";

export default function favorite () {
    const favoris = reactive([])
    return  {
        favoris
    }
}