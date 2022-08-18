import { reactive } from "vue";

export default function formValue() {
    const valeurs = reactive({
        prenom:'',
        nom:'',
        age:0,
        email:'',
        mdp:'',
        sexe:'',
        photo:'',
        country:'',
        town:'',
    });
    return {
        valeurs,
    }
}
