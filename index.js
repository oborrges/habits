const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

//ativando botão 

const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)
function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  if(dayExists) {
    alert('Dia já incluso! ❌')
    return
  }
  alert('adicionado com sucesso! ✅')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify
  (nlwSetup.data))
}

/*
const data = {
  estudo: [
    "01-01",
    "01-02",
    "01-03",
    "01-04",
    "01-05",
    "01-06"
  ],
  trabalho: ["01-03", "01-04", "01-05"],
  agua: ["01-03", "01-04", "01-05"],
}*/

//nlwSetup.setData(data)
//nlwSetup.load()