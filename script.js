const triggers = [
    { name: "first", from: 0, to: 275 },
    { name: "second", from: 300, to: 525 },
    { name: "third", from: 600, to: 850 }
  ];
  
  function animationPercentage(trigger, scrollY) {
    if (scrollY < trigger.from) return 0;
    if (scrollY > trigger.to) return 1;
    return (scrollY - trigger.from) / (trigger.to - trigger.from);
  }
  
  function updateTriggers(e) {
    triggers.forEach(trigger => {
      /* To support more complex easing, you could set multiple properties,
       * each one corresponding to a different timing function.
       * E.g. --${trigger.name}-animation-ease-in-out
       * and you would compute the percentage based on the linear animation percentage used here
       */
      const property = `--${trigger.name}-animation`;
      document.documentElement.style.setProperty(
        property,
        animationPercentage(trigger, window.scrollY)
      );
    });
  }
  
  window.addEventListener("scroll", updateTriggers);
  updateTriggers();
  