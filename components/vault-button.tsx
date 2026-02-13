"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function VaultButton() {
  const [showVault, setShowVault] = useState(false)
  const [konami, setKonami] = useState<string[]>([])
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKonami((prev) => {
        const updatedKonami = [...prev, e.key]
        if (updatedKonami.length > konamiCode.length) {
          updatedKonami.shift()
        }

        if (updatedKonami.join(",") === konamiCode.join(",")) {
          setShowVault(true)
          return []
        }

        return updatedKonami
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="opacity-0 hover:opacity-100 transition-opacity duration-300"
        onClick={() => setShowVault(true)}
        aria-label="Secret vault"
      >
        <Lock className="h-5 w-5" />
      </Button>

      <Dialog open={showVault} onOpenChange={setShowVault}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Secret Vault Unlocked!</DialogTitle>
            <DialogDescription>
              You've discovered the secret vault. This could contain private projects, personal notes, or any other
              hidden content.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Hidden Project: Smart Home Hub</h3>
              <p className="text-sm text-muted-foreground mt-2">
                A personal project integrating various IoT devices into a unified control system using custom firmware
                and a React-based dashboard.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Research Notes: Advanced Sensor Networks</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Preliminary research on low-power, long-range sensor networks for environmental monitoring applications.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

