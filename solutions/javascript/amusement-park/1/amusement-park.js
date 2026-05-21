/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const Visitor = {
    name,
    age,
    ticketId
  };
  return Visitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  // assuming not sold tickets have null value.
  // they are intialized with null
  const lookupTicket = tickets[ticketId];
  // can we do `if (not lookupTicket)` ?
  // guess not because both undefined & null negates to true.
  if (lookupTicket === null) { 
    return 'not sold';
  } else if (lookupTicket === undefined) {
    return 'unknown ticket id';
  } else {
    return `sold to ${lookupTicket}`;
  }
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  const lookupTicket = tickets[ticketId];
  // python muscle memory : return 'invalid ticket !!!' if lookupTicket == null else `${lookupTicket}`;
  // is there the idiomatic js way ? than this if clause ? 
  if (lookupTicket == null) {
    return 'invalid ticket !!!';
  }
  else { 
    return lookupTicket;
  }
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
