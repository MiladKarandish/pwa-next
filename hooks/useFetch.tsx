"use client";

import { Partner, db } from "@/database/db";
import { getPartners } from "@/services/partners";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState<Partner[]>([]);

  useEffect(() => {
    (async () => {
      if (navigator.onLine) {
        try {
          const resData = await getPartners();

          const data = new Set<Partner>(resData);

          setData(() => Array.from(data));
          if (!!process.env.isDbActive) {
            await db.partners.bulkAdd(Array.from(data));
          }
        } catch (error) {}
      } else {
        const dbData = await db.partners.toArray();
        setData(() => [...dbData]);
      }
    })();
  }, []);

  return [data];
};

export default useFetch;
