"use client"
import { useEffect, useState } from "react"
import Preloader from "../components/preloader"
import "animate.css"
import "aos/dist/aos.css"
import Home from "./home/page"

export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const delayMillis = 5000
    setTimeout(() => {
      setIsLoading(false)
    }, delayMillis)
  }, [])

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
          <Home/>
      )}
    </>
  )
}
