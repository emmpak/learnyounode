console.log(addNumbers(process.argv))

function addNumbers(arr) {
  return arr.slice(2).reduce((acc, num) => acc + Number(num), 0);
}
