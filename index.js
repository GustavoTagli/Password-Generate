let password = ''
const input = document.querySelector('#password')
const len = document.querySelector('#len-password')
const clipboardBtn = document.querySelector('#clipboard-btn')
let uppercase = ''
let lowercase = ''
let numbers = ''
let symbols = ''
let options = []

const charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const charLower = charUpper.map(char => char.toLowerCase())
const charSymbols = ['!', '@', '#', '$', '%', '&', '*', '-', '_', '.', '?', '~']
const charNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

updateOptions()
generatePassword()

function updateOptions() {
  uppercase = document.querySelector('#uppercase-password')
  lowercase = document.querySelector('#lowercase-password')
  numbers = document.querySelector('#numbers-password')
  symbols = document.querySelector('#symbols-password')
  
  options = [{boolValue: uppercase.checked, listChar: charUpper}, {boolValue: lowercase.checked, listChar: charLower}, {boolValue: numbers.checked, listChar: charNumbers}, {boolValue: symbols.checked, listChar: charSymbols}]
}

function generatePassword() {
  updateOptions()
  password = ''
  const charToPassword = []

  options.forEach(({boolValue, listChar}) => {
    if (boolValue) charToPassword.push(...listChar)
  })
  
  if (charToPassword.length == 0) {
    input.value = '--Please select at least one option--'
    return
  }

  for (let i = 0; i < len.value; i++) {
    password += charToPassword[Math.floor(Math.random() * charToPassword.length)]
  }
   
  input.value = password
}

len.addEventListener('input', () => {
  const label = document.querySelector('label[for="len-password"]')
  label.innerText = 'Length: ' + len.value
  generatePassword()
})
uppercase.addEventListener('input', generatePassword)
lowercase.addEventListener('input', generatePassword)
numbers.addEventListener('input', generatePassword)
symbols.addEventListener('input', generatePassword)

clipboardBtn.addEventListener('click', (ev) => {
  ev.preventDefault()
  try {
    const successful = navigator.clipboard.writeText(input.value)
    successful ? document.querySelector('#clipboard-btn p').innerText = 'Copied' : document.querySelector('#clipboard-btn p').innerText = 'Failed'
    document.querySelector('#clipboard-btn img').classList.add('imagemOnClipboard')
    setTimeout(() => {
      document.querySelector('#clipboard-btn p').innerText = ''
      document.querySelector('#clipboard-btn img').classList.remove('imagemOnClipboard')
    }, 4 * 1000)
  } catch (err) {
    console.error('Oops, unable to copy', err)
    alert('Failed to copy!')
  }
})