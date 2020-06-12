
/**
 * ASCII TRANSLATOR
 * 
 * @Author: titaro
 * @FB: facebook.com/tyroklonejr
 * @Github: github.com/tyroklone
 * 
 * @License: none
 * @Contribution: Allowed
 * @AIM: A simple program that converts ASCII codes to english language
 */

// ASCII controller
const ascii = (() => 
{
  // ASCII
  const asciiData = {
    32: ' ',
    33: '!',
    63: '?',
    64: '@',

    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',

    97: 'a',
    98: 'b',
    99: 'c',
    100: 'd',
    101: 'e',
    102: 'f',
    103: 'g',
    104: 'h',
    105: 'i',
    106: 'j',
    107: 'k',
    108: 'l',
    109: 'm',
    110: 'n',
    111: 'o',
    112: 'p',
    113: 'q',
    114: 'r',
    115: 's',
    116: 't',
    117: 'u',
    118: 'v',
    119: 'w',
    120: 'x',
    121: 'y',
    122: 'Z'
  };

  return {
    asciiObject: asciiData
  };
  
})();


// Program controller
const ProgController = (asciiCtrl => 
{
  // Prepare usefull variables
  const boxes = document.querySelector('div.boxes');
  const ebox = boxes.firstElementChild;
  const dbox = boxes.lastElementChild;
  const translate = document.getElementById('translate');

  // Event handler for the translate button
  translate.addEventListener('click', e => 
  {
    // Declare some usefull shortcuts
    const eboxValue = ebox.value;
    const breakDown = eboxValue.match(/32|33|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|97|98|99|100|101|102|103|104|105|106|107|108|109|110|111|112|113|114|115|116|117|118|119|120|121|122/g);
    
    // Do a reset of the textarea
    dbox.value = '';

    // Error message
    if(breakDown == null)
    {
      dbox.value = 'Error occured, please enter a valid ASCII code.';
    }

    let result = breakDown.map(current => 
    {
      if(asciiCtrl.asciiObject[current] !== undefined)
      {
        return asciiCtrl.asciiObject[current];
      }
    });

    result.forEach(char => dbox.value += char);
  });

})(ascii);