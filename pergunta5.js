const inverterString = (text) => {
   let newText = ''
   
    for (let i = 0; i < text.length; i++) {
        newText = text[i] + newText
    }

   return newText
}

console.log(inverterString('Mateus'));