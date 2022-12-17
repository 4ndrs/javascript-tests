const sleep = (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

(async () => {
  console.log("sleep for 5 seconds");
  await sleep(5);
  console.log("done");
})();
