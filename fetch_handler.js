curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
"contents": [{
    "parts":[{"text": "Explain how AI works"}]
}]
}'



async function fetchData() {
    try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY');  // Wait for the response
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();  // Wait for the response to be parsed as JSON
        console.log(data);
    } catch (error) {
        console.log('Error:', error);  // Handle any errors
    }
}

fetchData();  // Call the async function