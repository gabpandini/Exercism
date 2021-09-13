export function createVisitor(name, age, ticketId) {
 const cadastro = {
   name: name,
   age: age,
   ticketId: ticketId
 } 
  return cadastro;
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === null){
    return 'not sold';
  } else if(tickets[ticketId] === undefined){
    return 'unknown ticket id';
  }
  else {
    return `sold to ${tickets[ticketId]}`;
  }
}

export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!';
    }

export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
