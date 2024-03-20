import React from "react"

export default function AuthLayout({children}){
    return(
        <>
            <main className="bg-slate-100 flex justify-center md:items-center h-screen">
                <p className="text-center">{children}</p>
            </main>
        </>
    )
}