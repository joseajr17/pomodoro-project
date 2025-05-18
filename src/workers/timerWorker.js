let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;
  const dateNow = Date.now();
  
  let countDown = Math.ceil((endDate - dateNow) / 1000);

  function tick() {
    self.postMessage(countDown);

    const dateNow = Date.now();
    countDown = Math.floor((endDate - dateNow) / 1000);

    setTimeout(tick, 1000);
  }

  tick();
};