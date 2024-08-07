

function withdraw(person, amount) {
    
    if (amount > person.balance) {
      console.log("Withdrawal cannot be processed due to insufficient funds.");
    } else {
      
      person.balance -= amount;
      console.log(`Withdrawal successful. New balance: $${person.balance}`);
    }
  }
  
  
  let person = { 
    balance: 500 
};

  
  
  withdraw(person, 600); 
  
  withdraw(person, 300);
  