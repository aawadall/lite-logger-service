#!/bin/bash

# create entry
curl -X POST \
 -H "Content-Type: application/json" \
 -d @tests/sample_payload_1.json \
 http://localhost:3000/api/logs

# get entry 
curl -X GET \
-H "Content-Type: application/json" \
    http://localhost:3000/api/logs?id=test1 
    
