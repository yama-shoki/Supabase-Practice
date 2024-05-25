"use client";

import { useState, useEffect } from "react";
import { BBSCardList } from "./components/BBSCardList";
import { BBSData } from "./types/types";
import { Container, Pagination, Box, Typography, Button } from "@mui/material";

async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  const bbsAllData: BBSData[] = await response.json();
  return bbsAllData.reverse(); // 取得したデータを逆順にする
}

export default function Home() {
  const [bbsAllData, setBbsAllData] = useState<BBSData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    async function fetchData() {
      const data = await getBBSAllData();
      setBbsAllData(data);
    }
    fetchData();
  }, []);

  // ページごとのデータを取得する
  const paginatedData = bbsAllData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPages = Math.ceil(bbsAllData.length / pageSize);

  const handlePageChange = (_event, page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <BBSCardList bbsAllData={paginatedData} />
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Container>
  );
}
