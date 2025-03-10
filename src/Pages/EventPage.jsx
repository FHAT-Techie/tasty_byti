import EventComponent from "../Components/EventComponents";
import OtherPageHero from "../Components/OtherPageHero";
import Footer from "../Components/Footer"

export default function EventPage() {
    const weeklyEvents = [
        { day: "Monday", event: "Pasta & Wine Night" },  
        { day: "Tuesday", event: "Taco Tuesday" },  
        { day: "Wednesday", event: "Burger & Fries Combo" },  
        { day: "Thursday", event: "Small Chops & Smoothies Day" },  
        { day: "Friday", event: "Jollof & Grilled Protein Night" },  
        { day: "Saturday", event: "Cocktail & Mocktail Saturday" }  
    ];

    return (
        <>
            <OtherPageHero
                Header="TASTY-BYTI EVENTS"
                SubHeader="At Tasty__ByTi, we believe every day should be a celebration of good food, great company, and amazing vibes! That’s why we’ve curated a lineup of special themed events throughout the week, offering exclusive discounts, unique menus, and exciting experiences. Mark your calendars and don’t miss out on these delicious deals!"
            />
            <div className="eventList">
                {weeklyEvents.map((event, index) => (
                    <EventComponent key={index} Day={event.day} EventName={event.event} />
                ))}
            </div>
            <Footer />
        </>
    );
}
