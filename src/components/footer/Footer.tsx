import NavigationFooter from "./navigation/NavigationFooter"

export default function Footer() {
    const NAVLIST = ["Discover", "Resources", "Support", "Legal"]
    return (
        <footer className="flex justify-center border border-gray-950 text-center">
            <div className="container">
                <div>
                    <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-10 py-16 lg:py-24 border border-dotted border-red-600">
                        <div className="col-span-2 lg:col-span-3 flex flex-col items-center sm:items-start">Logo</div>
                        <NavigationFooter navList={NAVLIST} />
                    </div>
                    <div className="border border-dotted border-blue-600">Social Links & Copyright</div>
                </div>
                <div></div>
            </div>
        </footer>
    )
}
