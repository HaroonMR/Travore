function generateItinerary() {
    const destination = document.getElementById('destination').value;
    const budget = parseInt(document.getElementById('budget').value);
    const duration = parseInt(document.getElementById('duration').value);

    let itinerary = `
        Destination: ${destination} <br>
        Recommended Budget: ₹${budget} <br>
        Suggested Activities: <br>
        - Visit cultural landmarks <br>
        - Enjoy local cuisine <br>
        - Explore nature trails <br>
        Duration: ${duration} days
    `;

    document.getElementById('itinerary-output').innerHTML = itinerary;
}

function showAttractions() {
    const attractions = `
        - Central Park <br>
        - Historical Museum <br>
        - Local Market for budget shopping <br>
        - Food Street for delicious treats
    `;
    document.getElementById('attractions-output').innerHTML = attractions;
}

function showStudentTips() {
    const tips = `
        - Use public transport for savings. <br>
        - Try hostels or Airbnb for affordable stays. <br>
        - Book flights early to get discounts. <br>
        - Use travel apps for exclusive deals.
    `;
    document.getElementById('student-output').innerHTML = tips;
}
