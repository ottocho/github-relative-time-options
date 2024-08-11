javascript: (() => {
  document.querySelectorAll("relative-time").forEach(function (element) {
    if (!element.shadowRoot) {
      return;
    }
    element.format = "datetime";
    element.hour = "numeric";
    element.minute = "2-digit";
    element.second = "2-digit";
  });
})();
