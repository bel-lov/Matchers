export default function calculate(person) {
  return person.sort((a, b) => Number(b.health) - Number(a.health));
}
