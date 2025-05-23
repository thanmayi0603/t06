"use client"
import { useEffect, useState } from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="theme-switcher">
            <button
                onClick={() => setTheme("light")}
                className={cn(
                    "theme-btn",
                    theme === "light" && "active"
                )}
                aria-label="Light theme"
            >
                <Sun className="h-4 w-4" />
            </button>

            <button
                onClick={() => setTheme("dark")}
                className={cn(
                    "theme-btn",
                    theme === "dark" && "active"
                )}
                aria-label="Dark theme"
            >
                <Moon className="h-4 w-4" />
            </button>

            <button
                onClick={() => setTheme("system")}
                className={cn(
                    "theme-btn",
                    theme === "system" && "active"
                )}
                aria-label="System theme"
            >
                <Monitor className="h-4 w-4" />
            </button>
        </div>
    )
}
