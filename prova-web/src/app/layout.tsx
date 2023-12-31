
//import { Inter } from 'next/font/google'
import './globals.css'


export const metadata = {
  title: 'Simulado',
  description: 'Telas no simulado 2º bimestre',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}