import json

with open("busstops.json") as file:
    data = json.load(file)


for i in range(len(data["bus_stops"])):
    print(data["bus_stops"][i]["latitude"])
