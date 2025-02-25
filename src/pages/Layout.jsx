import Navbar from "@/pages/Navbar";

export default function Layout({ children }) {
    const today = new Date()

    return (
        <div className="layout_wrapper">
            <Navbar />
            <main>
                {children}
            </main>
            <footer>
                <div>
                    <h3>Humble Methods</h3>
                    <p>© {today.getFullYear()} Humble Methods LLC</p>
                </div>
            </footer>
        </div>
    );
}
