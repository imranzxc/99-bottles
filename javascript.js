function generateSingleStanza(number) {
  let bottleString = "бутылок";
  if ((number % 10 == 1 || number == 1) && number != 11) {
    bottleString = "бутылка";
  } else if (number <= 4) {
    bottleString = "бутылки";
  } else if ((number > 20) && (number % 10 == 4 || number % 10 == 3 || number % 10 == 2)) {
    bottleString = "бутылки";
  }
  return bottleString;
}

function generateSongText() {
  let number = 99;
  while (number > 0) {
    console.log(`${number} ${generateSingleStanza(number)} пива на стене, ${number} ${generateSingleStanza(number)} пива!`);
    number = number - 1;
    if (number > 0) {
      console.log(`Возьми одну, пусти по кругу, ${number} ${generateSingleStanza(number)} пива на стене!`);
    } else {
      console.log(`Возьми одну, пусти по кругу, нет бутылок пива на стене!`);
    }
  }
}