let container = [];

function numbertowords(num) {
  for (i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      container.push("yu-gi-oh");
    } else if (i % 3 === 0 && i % 5 === 0) {
      container.push("gi-oh");
    } else if (i % 2 === 0 && i % 5 === 0) {
      container.push("yu-oh");
    } else if (i % 2 === 0 && i % 3 === 0) {
      container.push("yu-gi");
    } else if (i % 5 === 0) {
      container.push("oh");
    } else if (i % 3 === 0) {
      container.push("gi");
    } else if (i % 2 === 0) {
      container.push("yu");
    } else {
      container.push(i);
    }
  }

return container;
}

numbertowords(100);