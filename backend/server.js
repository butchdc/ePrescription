const express = require('express');
const cors = require('cors');
const app = express();

// Import routes
const settingsRoutes = require('./routes/settings');
const entitiesRoutes = require('./routes/entities');

// Initialize databases
require('./initdb/initSettingsDb');
require('./initdb/initEntitiesDb');

// Start the event listener
//require('./listeners/eventListener');

app.use(express.json());
app.use(cors());

// Use routes
app.use('/api/settings', settingsRoutes);
app.use('/api/entities', entitiesRoutes);

app.listen(3001, () => {
  console.log('Backend server running on port 3001');
});
