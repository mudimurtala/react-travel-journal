import Header from "./components/Header"
import Entry from "./components/Entry"

/**
 * Challenge: pass props to the Entry component to display
 * its data. See the `data.md` file for each prop name and its
 * value.
 * 
 * Then on the Entry component, receive and display the values
 * for those props. In the end, the page should look the same
 * as it does now, but without all the hard-coded data in the
 * component
 */

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Entry
                    img={{
                        src: "https://scrimba.com/links/travel-journal-japan-image-url",
                        alt: "Mount Fuji"
                    }}
                    title="Mount Fuji"
                    country="Japan"
                    googleMapsLink="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
                    dates="12 Jan, 2021 - 24 Jan, 2021"
                    text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                />
            </main>
        </>
    )
}