// Controller for handling API logic
const getMessage = (req, res) => {
    res.json({ message: 'Hello from the backend!' });
  };
  
  module.exports = { getMessage };
  