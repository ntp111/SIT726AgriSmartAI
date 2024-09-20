const express = require('express');
const router = express.Router();

// Dummy crop data
const crops = [
    { 
        id: 1, 
        cd: '001', 
        name: 'Wheat', 
        planted_on: '2024-03-01', 
        harvest_due: '2024-10-22', 
        status: 'Growing', 
        estimate_amount: '100kg',
        profit_margin: '65%',
        action_num: 3,
        iotData: { moisture: '30%', temperature: '22°C', humidity: '65%' }
    },
    { 
        id: 2, 
        cd: '002', 
        name: 'Corn', 
        planted_on: '2024-05-12', 
        harvest_due: '2024-11-30', 
        status: 'Growing', 
        estimate_amount: '130kg',
        profit_margin: '70%',
        action_num: 2,
        iotData: { moisture: '40%', temperature: '25°C', humidity: '70%' }
    },
    { 
        id: 3, 
        cd: '003', 
        name: 'Tomato', 
        planted_on: '2024-06-15', 
        harvest_due: '2024-09-25', 
        status: 'Harvesting', 
        estimate_amount: '90kg',
        profit_margin: '65%',
        action_num: 1,
        iotData: { moisture: '35%', temperature: '23°C', humidity: '68%' }
    },
    { 
        id: 4, 
        cd: '004', 
        name: 'Watermelon', 
        planted_on: '2024-07-15', 
        harvest_due: '2024-10-25', 
        status: 'Very Good', 
        estimate_amount: '60kg',
        profit_margin: '60%',
        action_num: 0,
        iotData: { moisture: '32%', temperature: '24°C', humidity: '64%' }
    },
    { 
        id: 5, 
        cd: '005', 
        name: 'Green Onion', 
        planted_on: '2024-06-15', 
        harvest_due: '2024-09-25', 
        status: 'Low', 
        estimate_amount: '60kg',
        profit_margin: '20%',
        action_num: 6,
        iotData: { moisture: '28%', temperature: '21°C', humidity: '60%' }
    }
];


// Crop Management list
router.get('/crop-management', (req, res) => {
    const user = { name: "Test User" };  // Simulate logged-in user
    res.render('crop-management', { crops, user });
});

router.get('/crop-management/new', (req, res) => {
    const cropData = {};  // Empty data for new crop
    res.render('crop-detail', { crop: cropData });  // Render an empty form
});

router.post('/save-crop', (req, res) => {
    // Logic to save the new crop data (this can be to a database or a simple in-memory store for now)
    const newCrop = {
        name: req.body.name,
        status: req.body.status,
        plantedOn: req.body.plantedOn,
        harvestDue: req.body.harvestDue,
        // Add other fields as necessary
    };

    // Simulate saving the crop (you can replace this with actual database logic)
    console.log('New crop data:', newCrop);

    // Redirect back to crop management after saving
    res.redirect('/crop-management');
});


// Crop Detail page
router.get('/crop-management/:id', (req, res) => {
    const cropId = parseInt(req.params.id);
    const crop = crops.find(c => c.id === cropId);
    const user = { name: "Test User" };  // Simulate logged-in user

    if (!crop) {
        return res.status(404).send('Crop not found');
    }

    res.render('crop-detail', { crop, user });
});

module.exports = router;
