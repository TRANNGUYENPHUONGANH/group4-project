let users = []; // nếu dùng DB thì thay bằng model

// GET /api/users
exports.getUsers = (req, res) => {
  res.json(users);
};

// POST /api/users
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Date.now().toString(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// PUT /api/users/:id
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    return res.json(users[index]);
  }
  res.status(404).json({ message: 'User not found' });
};

// DELETE /api/users/:id
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id !== id);
  res.json({ message: 'User deleted' });
};
