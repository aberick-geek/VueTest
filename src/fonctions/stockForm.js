import { reactive } from "vue";

export default function formValue() {
    const valeurs = reactive({
        prenom:'',
        nom:'',
        age:0,
        email:'',
        mdp:'',
        mdpRepeat:'',
        sexe:'',
        photo:'',
        country:'',
        town:'',
        etapeFirstValide: false,
        etapeSecondValide: false,
        etapeThirdValide: false,
    });
    return {
        valeurs,
    }
}