const writeClipboard = (string) => {
  navigator.clipboard.writeText(string);
};

const lang = document.documentElement.lang;

// https://github.com/github/relative-time-element/blob/15ca61e1992f39f242aa4de0b35c14ce76062990/src/relative-time-element.ts#L122
const getFormattedTitle = (date) => {
  return new Intl.DateTimeFormat(lang, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);
};

const relativeTimeElements = document.querySelectorAll("relative-time");

relativeTimeElements.forEach(function (element) {
  if (!element.shadowRoot) {
    return;
  }
  // format="datetime" hour="numeric" minute="2-digit" second="2-digit" title="Dec 31, 1969, 7:00 PM EST">
  //
  element.format = "datetime";
  element.hour = "numeric";
  element.minute = "2-digit";
  element.second = "2-digit";

  const dateTimeString = element.getAttribute("datetime");
  if (!dateTimeString) {
    return;
  }

  const date = new Date(dateTimeString);
  const localTimeString = getFormattedTitle(date);

  // double click to copy the date
  element.addEventListener("dblclick", function () {
    writeClipboard(localTimeString);
    element.style.fontWeight = "500";
    setTimeout(function () {
      element.style.fontWeight = "normal";
    }, 350);
  });
});
