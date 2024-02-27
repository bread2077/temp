export function debounce(callee, timeoutMs) {
  return function perform(...args) {
    let previousCall = window.lastCall;
    window.lastCall = Date.now();

    if (previousCall && window.lastCall - previousCall <= timeoutMs) {
      clearTimeout(window.lastCallTimer);
    }

    window.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}
