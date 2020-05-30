const days = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
};
const getDays = (times) => times.map(({ day_of_week }) => days[day_of_week]); // [] peuvent être utilisés dans la manipulation de la structure de données d'un objet. le '.' va chercher littéralement la clé alors que le '[]' va chercher une clé qui vaut la valeur de la variable/symbole entre crochets, un peu comme un Find

module.exports = { getDays };
