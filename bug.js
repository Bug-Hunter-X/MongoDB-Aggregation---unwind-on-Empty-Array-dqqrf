```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results"
    }
  },
  {
    $unwind: "$results" // This can cause errors if 'results' array is empty 
  }
];

db.collectionA.aggregate(pipeline);
```