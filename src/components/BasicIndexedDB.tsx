import { useEffect, useState } from "react";

export default function BasicIndexedDB() {
  const [db, setDb] = useState<IDBDatabase | null>(null);

  useEffect(() => {
    const dbName = "db_ournote";
    const request = indexedDB.open(dbName);

    request.onerror = (event) => {
      console.error("Fail to request indexedDB");
    };

    request.onsuccess = (event: Event) => {
      const target = event.target as IDBRequest;

      setDb(target.result);
    };

    request.onupgradeneeded = (event) => {
      const target = event.target as IDBRequest;
      const db = target.result;

      if (!db.objectStoreNames.contains("notes")) {
        db.createObjectStore("notes", { keyPath: "id" });
      }
    };
  }, []);

  const clearDb = () => {
    if (!db) return;

    const transaction = db.transaction("notes", "readwrite");
    const store = transaction.objectStore("notes");
    store.clear();

    console.log("DB cleared");
  };

  const saveNote = () => {
    if (!db) return;

    const transaction = db.transaction("notes", "readwrite");
    const store = transaction.objectStore("notes");
    const note = { id: Date.now(), content: "my new note" };

    const request = store.add(note);
    request.onsuccess = () => {
      alert("노트 저장 성공");
    };
  };

  const fetchNote = () => {
    if (!db) return;

    const transaction = db.transaction("notes", "readonly");
    const store = transaction.objectStore("notes");
    const request = store.getAll();

    request.onsuccess = () => {
      console.log("All notes...", request);
    };
  };

  return (
    <div>
      <div>Note</div>

      <button className="p-1 border cursor-pointer" onClick={saveNote}>
        add
      </button>
      <button className="p-1 border cursor-pointer" onClick={clearDb}>
        clear
      </button>
      <button className="p-1 border cursor-pointer" onClick={fetchNote}>
        fetchNote
      </button>
    </div>
  );
}
