sleep 25

#screen -dmS wb sudo pnpm dev

screen -dmS pocket ./database/pocketbase serve --http="0.0.0.0:8090"

sleep 25 

firefox -url "http://localhost:3000/" &
xdotool search --sync --onlyvisible --class "Firefox" windowactivate key F11 
