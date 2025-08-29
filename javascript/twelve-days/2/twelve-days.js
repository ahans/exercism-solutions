//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DAYS = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
];

const GIFTS = [
  'twelve Drummers Drumming', 
  'eleven Pipers Piping',
  'ten Lords-a-Leaping',
  'nine Ladies Dancing',
  'eight Maids-a-Milking',
  'seven Swans-a-Swimming',
  'six Geese-a-Laying',
  'five Gold Rings',
  'four Calling Birds',
  'three French Hens',
  'two Turtle Doves',
  'a Partridge in a Pear Tree',
];

const verse = (day) => {
  const gifts = GIFTS.slice(12 - day);
  const formattedGifts = gifts.length === 1 ? gifts[0] : `${gifts.slice(0, gifts.length - 1).join(', ')}, and ${gifts.slice(-1)}`
  return `On the ${DAYS[day - 1]} day of Christmas my true love gave to me: ${formattedGifts}.\n`
}

export const recite = (from, to = from) => {
  const verses = Array.from({length: to - from + 1}, (_, i) => verse(i + from));
  return verses.join('\n');
};
