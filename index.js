function rollDice() {
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const numOfDice = document.getElementById("numOfDice").value;
  
    const values = [];
    const images = [];
  
    for (let i = 0; i < numOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }
  
    diceResult.textContent = `🎲 You rolled: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
  }
  