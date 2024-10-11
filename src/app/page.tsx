"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [roomName, setRoomName] = useState("");

  const handleCreateRoom = async () => {
    // Call backend API to create room
    const response = await fetch("/api/room/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomName }),
    });
    const data = await response.json();

    // Redirect to the created room
    window.location.href = `/room/${data.roomId}`;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl mb-6">Welcome to Parley</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className="border rounded p-2 mb-2"
        />
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleCreateRoom}
        >
          Create New Room
        </Button>
      </div>

      <div>
        <Link href="/join">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Join a Room
          </button>
        </Link>
      </div>
    </main>
  );
}
