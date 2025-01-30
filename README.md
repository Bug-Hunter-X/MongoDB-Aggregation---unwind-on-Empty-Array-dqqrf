# MongoDB Aggregation: $unwind on Empty Array

This repository demonstrates a common error when using the `$unwind` operator in MongoDB aggregation pipelines. The `$unwind` operator fails if the array field being unwound is empty in any of the documents being processed, leading to pipeline errors.

## Bug
The provided `bug.js` file shows a basic aggregation pipeline that performs a lookup and then attempts to unwind the results. If the `results` array in any document is empty, the pipeline will fail.

## Solution
The `solution.js` file demonstrates using the `$ifNull` operator to handle the potential for empty arrays before unwinding. This will prevent the pipeline from failing and provide a more robust aggregation.