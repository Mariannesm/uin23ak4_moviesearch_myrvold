export default function Layout ({children}) {
    return (
        <div className="forside">
        <header>
            <h1>Movie search</h1>
        </header>
        <main>
            {children}
        </main>
    </div>
    )
}