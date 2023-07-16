function oppositesAttract(fl1, fl2) {
  return (fl1 + fl2) % 2 !== 0;
}


// export function lovefunc(flower1: number, flower2: number): boolean {
//   return Math.abs(flower1 - flower2) % 2 !== 0;
// }

module.exports = oppositesAttract;
