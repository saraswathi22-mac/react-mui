import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-chil td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "M A",
    last_name: "Saraswathi",
    email: "saraswathi.mac@gmail.com",
    gender: "Female",
    ip_address: "34.23.123.537",
  },
  {
    id: 2,
    first_name: "M A",
    last_name: "Nirvisha",
    email: "nirvisha99@gmail.com",
    gender: "Female",
    ip_address: "34.23.123.537",
  },
  {
    id: 3,
    first_name: "Karan",
    last_name: "Roy",
    email: "karan.roy@gmail.com",
    gender: "Male",
    ip_address: "34.23.123.537",
  },
  {
    id: 4,
    first_name: "M A",
    last_name: "Saraswathi",
    email: "saraswathi.mac@gmail.com",
    gender: "Female",
    ip_address: "34.23.123.537",
  },
  {
    id: 5,
    first_name: "M A",
    last_name: "Nirvisha",
    email: "nirvisha99@gmail.com",
    gender: "Female",
    ip_address: "34.23.123.537",
  },
  {
    id: 6,
    first_name: "Karan",
    last_name: "Roy",
    email: "karan.roy@gmail.com",
    gender: "Male",
    ip_address: "34.23.123.537",
  },
  {
    id: 7,
    first_name: "M A",
    last_name: "Saraswathi",
    email: "saraswathi.mac@gmail.com",
    gender: "Female",
    ip_address: "34.23.123.537",
  },
  {
    id: 8,
    first_name: "M A",
    last_name: "Nirvisha",
    email: "nirvisha99@gmail.com",
    gender: "Female",
    ip_address: "34.23.123.537",
  },
  {
    id: 9,
    first_name: "Karan",
    last_name: "Roy",
    email: "karan.roy@gmail.com",
    gender: "Male",
    ip_address: "34.23.123.537",
  },
];
