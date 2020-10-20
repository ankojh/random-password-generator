import { LOWERCASE_ALPHABETS, UPPERCASE_ALPHABETS } from "../constants/alphabets";
import { NUMBERS } from "../constants/numbers";
import { SPECIAL_CHARACTERS } from "../constants/specialCharacters";
import { getRandomInt } from "./random";


let previousOptions = {}
let prevCharacterSet = []


const generateSetFromOptions = (options)=>{
  previousOptions = {...options};
  const set = []
  if(options.numbers){
    set.push(...NUMBERS)
  }

  if(options.upperCase){
    set.push(...UPPERCASE_ALPHABETS)
  }

  if(options.lowerCase){
    set.push(...LOWERCASE_ALPHABETS)
  }

  if(options.special){
    set.push(...SPECIAL_CHARACTERS)
  }

  return set;
}

export const generateRandomPassword = (options)=>{
  let characterSet = prevCharacterSet;
  
  //? optimization
  if(JSON.stringify(options) !== JSON.stringify(previousOptions)){
     prevCharacterSet = [...characterSet];
  }
  characterSet = generateSetFromOptions(options);

  let password = ''


  if(characterSet.length){
    for (let i = 0; i < options.length; i++) {
      const randomIndex = getRandomInt(0, options.length);
      password += characterSet[randomIndex % characterSet.length];
    }
  }

  return password;
}
