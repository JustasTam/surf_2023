// Commonly used functions / methods are being stored here
// This will help to reuse the same code all across the project - where needed

async function buildRandomEmail() {
  // by using timestamp - emails will always be uniq by millisec seperation
  const timestamp = new Date().getTime();

  // by adding "+timestamp" on "qa@surfshark.com" email ->
  // we can reuse the same inbox, but allow registration to pass with a uniq email
  return `qa+${timestamp}@surfshark.com`;
}

module.exports = {
  buildRandomEmail,
};