export default function emailValide(email) {
    const valide = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    return valide.test(email)
  }