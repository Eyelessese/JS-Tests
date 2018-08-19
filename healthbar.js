function healthbar(total, current)
{
  let denoms = [String("-"), String('\\'), String("|"), String("/"), String("*")]
  let ticks = 40
  
  let increment = total * .025;
  let damage = total - current;
  let bar = "[";
  ticks -= Math.floor(damage / increment);
  for(let i = 1; i <= 10; i++)
  {
    if(ticks - 4 >= 0)
    {
     ticks -= 4;
     bar += denoms[4]
    }
    else
    {
      bar += denoms[ticks];
      ticks -= ticks;
    }
  }
  return bar + "]" + " " + current + "/" + total;
}

console.log(healthbar(100,100));
console.log(healthbar(679,455));
console.log(healthbar(1023,998));
console.log(healthbar(43,21));
console.log(healthbar(456,125));
console.log(healthbar(812,390));
console.log(healthbar(2556,1204));
console.log(healthbar(100,50));
console.log(healthbar(999,23));
console.log(healthbar(239, 41));
