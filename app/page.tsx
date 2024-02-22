"use client";

import { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Partner, db } from "../database/db";
import { getPartners } from "@/services/partners";
import { Virtuoso } from "react-virtuoso";
import useFetch from "@/hooks/useFetch";

function App() {
  const [data] = useFetch();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const resData = await getPartners();

  //       const data = new Set<Partner>(resData);

  //       const id = await db.partners.bulkPut(Array.from(data));

  //       setStatus(`successfully added. Got id ${id}`);
  //     } catch (error) {
  //       setStatus(`Failed to add: ${error}`);
  //     }
  //   })();
  // }, []);

  return (
    <main style={{ width: "100%" }}>
      <p>Hello from here</p>

      <Virtuoso
        style={{ width: "100%", height: "90dvh" }}
        data={data}
        itemContent={(_, partner) => (
          <div
            style={{
              padding: "1rem 0.5rem",
              marginBottom: "1rem",
              backgroundColor: "cadetblue",
            }}
          >
            <h4>{partner.name}</h4>
            <div style={{ marginTop: "1rem" }}>{partner.id}</div>
          </div>
        )}
      />
    </main>
  );
}

export default App;
