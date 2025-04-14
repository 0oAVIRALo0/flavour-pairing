// const rawResponse =
//   '[{"category": "fruit", "entity_id": 190, "category_readable": "Fruit", "entity_alias_basket": "mango", "natural_source_name": "Mangifera", "matched_term": ["Mango"], "entity_alias_readable": "Mango", "entity_alias": "mango", "natural_source_url": "https://en.wikipedia.org/wiki/Mangifera", "entity_alias_url": "https://en.wikipedia.org/wiki/Mango", "entity_alias_synonyms": "Mango"}, {"category": "fruit", "entity_id": 585, "category_readable": "Fruit", "entity_alias_basket": "", "natural_source_name": "Garcinia", "matched_term": ["Mangosteen", "Purple mangosteen"], "entity_alias_readable": "Purple mangosteen", "entity_alias": "", "natural_source_url": "https://en.wikipedia.org/wiki/Garcinia", "entity_alias_url": "https://en.wikipedia.org/wiki/Purple_mangosteen", "entity_alias_synonyms": "Mangosteen"}]';

// const parsedData = JSON.parse(rawResponse);

// console.log("Data: ", parsedData);

// // parsedData.forEach((item) => {
// //   console.log(item);
// // });


// import requests
// import json

// entity_id = 190
// url = f"https://cosylab.iiitd.edu.in/flavordb2/food_pairing_analysis?id={entity_id}"
// response = requests.get(url)
// data = json.loads(response.json())  // the endpoint returns a JSON string

// // Sort by number of shared molecules
// top_10 = sorted(data.items(), key=lambda x: len(x[1]['common_molecules']), reverse=True)[:10]

// for i, (id_, entry) in enumerate(top_10, 1):
//     name = entry['entity_details']['name']
//     count = len(entry['common_molecules'])
//     print(f"{i}. {name} - {count} shared molecules")
