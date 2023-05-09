import * as React from "react";
import Table from "@mui/joy/Table";
import Box from "@mui/joy/Box";

// Just one table for now until the api stabilises - tables still seem wip
const TableSection = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Table variant="plain" stripe="odd" color="neutral">
          <thead>
            <tr>
              <th>Dessert (100g serving)</th>
              <th>Calories</th>
              <th>Fat&nbsp;(g)</th>
              <th>Carbs&nbsp;(g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Frozen yoghurt</td>
              <td>159</td>
              <td>6</td>
              <td>24</td>
            </tr>
            <tr>
              <td>Ice cream sandwich</td>
              <td>237</td>
              <td>9</td>
              <td>37</td>
            </tr>
            <tr>
              <td>Eclair</td>
              <td>262</td>
              <td>16</td>
              <td>24</td>
            </tr>
          </tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default TableSection;
