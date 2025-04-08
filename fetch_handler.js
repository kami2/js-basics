import 'dotenv/config'

async function fetchData() {
    try {
        const requestData = {
            contents: [
                {
                    parts: [
                        { text: "Explain how AI works" }
                    ]
                }
            ]
        };
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_KEY}`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData)
        });  // Wait for the response
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.log('Error:', error);  // Handle any errors
    }
}

fetchData();  // Call the async function