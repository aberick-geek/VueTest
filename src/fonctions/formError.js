import { reactive } from "vue"

export default function formError() {
    const error = reactive({
        nomErr:'bonjour',
        prenomErr:'',
        ageErr:'',
        emailErr:'',
        sexeErr:'',
        countryErr:'',
        townErr:'',
        mdpErr:'',
    })
    return {
        error,
    }
}