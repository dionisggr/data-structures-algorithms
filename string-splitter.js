// StringSplitter drill
function stringSplitter(string) {
  let i = 0;
  let betweenSymbols = '';
  let combined = [];
  if (string.length === 0) return [];
  while (string[i] && string[i].match(/[a-zA-Z0-9]/)) {
    betweenSymbols += string[i];
    i++;
  };
  if (betweenSymbols.length !== 0) {
    combined = [betweenSymbols];
  }
  return combined.concat(stringSplitter(string.slice(i + 1)));
};