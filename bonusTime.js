function bonusTime(salary, bonus) {
    let currency = '£'
    if (bonus == true) {
      let count = salary * 10
      return `${currency}${count}`
    }
    else if (bonus == false) {
     return `${currency}${salary}`
    }
  }


  console.log(bonusTime(10, false))
