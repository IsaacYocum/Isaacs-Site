const sonnet = `Let me not to the marriage of ture minds
admit impediments. Love is not Love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark that looks on tempests and is never shake;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

let uniques = {};
let words = sonnet.match(/\w+/g);

for (let i = 0; i < words.length; i++) {
  let word = words[i];    //assigns word a vlaue based on index i of words
  if (uniques[word]) {    //if the key exists add 1 to value
    uniques[word] += 1;
  } else {                //if the key doesn't exit, create it and set value to 1
    uniques[word] = 1;
  }
}

console.log(uniques);
