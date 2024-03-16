import Link from "next/link";

export default function NavigationBar() {
    return (
        <>
            <header className="w-full sticky top-0 z-30 bg-white shador-md py-2">
                <nav className="max-w-md mx-auto flex justify-between items-center">
                    <Link href={'/'} passHref>Home</Link>
                    <Link href={'/products'} passHref>Products</Link>
                    <Link href={'/dashboard'} passHref>Dashboard</Link>
                </nav>
            </header>
        </>
    )
}