// mod1.js
const mod1Function = () => console.log("Mod1 is alive!");
// // // // // // // // //
function arr(item) {
  let count;
  item.forEach((element) => {
    count =element + 1;
  });
  return count;
}
export { mod1Function, arr };
