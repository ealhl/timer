const args = process.argv.slice(2);
const allPositiveNumberArray = [];

if (args.length > 0) {
  args.forEach((element) => {
    if (element > 0 && !isNaN(Number(element))) {
      allPositiveNumberArray.push(element);
    }
  });
}
const sortedArgs = allPositiveNumberArray.sort((a, b) => a - b);
for (const arg of sortedArgs) {
  setTimeout(() => {
    process.stdout.write(".");
  }, arg * 1000);
}
