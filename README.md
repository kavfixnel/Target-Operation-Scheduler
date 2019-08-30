# Target-Operation-Scheduler
Creates a schedule for satellite operation based on location of targets, orbits and the condition at the time of passing of the target

## How to use the scheduler
To set up the initial configuration and download all the dependencies:
1. Run `./setup` to set up the running environment of the script
2. Rename the .env-default to the .env and import the Darksky API key
3. Put the output of STK into a file called input.csv
4. Run `./app.py` to execute the program

Powered by Darksky