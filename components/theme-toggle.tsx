"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = (e: React.MouseEvent) => {
    if (isTransitioning) return

    const x = e.clientX
    const y = e.clientY

    setCursorPosition({ x, y })
    setIsTransitioning(true)

    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000)
  }

  const currentTheme = resolvedTheme || theme

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative overflow-hidden"
        aria-label="Toggle theme"
      >
        {currentTheme === "dark" ? (
          <Moon className="h-5 w-5 transition-transform duration-300 ease-in-out" />
        ) : (
          <Sun className="h-5 w-5 transition-transform duration-300 ease-in-out" />
        )}
      </Button>

      {isTransitioning && (
        <div
          className="fixed inset-0 z-[100] pointer-events-none"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            pointerEvents: "none",
          }}
        >
          <div
            className={`absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 ${currentTheme === "dark" ? "bg-background" : "bg-background"}`}
            style={{
              top: cursorPosition.y,
              left: cursorPosition.x,
              width: "10px",
              height: "10px",
              animation: "theme-ripple 1s ease-out forwards",
            }}
          />
        </div>
      )}
    </>
  )
}

