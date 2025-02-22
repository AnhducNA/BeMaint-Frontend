'use client'

import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const initialInventory = [
  {
    id: 1,
    name: "Vật tư A",
    code: "VT001",
    quantity: 100,
    importDate: "2025-02-20",
    exportDate: "2025-02-21",
  },
  {
    id: 2,
    name: "Vật tư B",
    code: "VT002",
    quantity: 50,
    importDate: "2025-02-18",
    exportDate: "2025-02-22",
  },
];

const InventoryManagementView = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    id: "",
    name: "",
    code: "",
    quantity: "",
    importDate: "",
    exportDate: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.id) {
      setInventory(
        inventory.map((item) =>
          item.id === form.id ? { ...form, id: item.id } : item,
        ),
      );
    } else {
      setInventory([...inventory, { ...form, id: Date.now() }]);
    }
    handleClose();
  };

  const handleEdit = (item) => {
    setForm(item);
    handleOpen();
  };

  const handleDelete = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Quản lý Kho Vật Tư
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Thêm Vật Tư
      </Button>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tên vật tư</TableCell>
              <TableCell>Mã vật tư</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell>Thời gian nhập</TableCell>
              <TableCell>Thời gian xuất</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.code}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.importDate}</TableCell>
                <TableCell>{item.exportDate}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(item)}>Sửa</Button>
                  <Button onClick={() => handleDelete(item.id)} color="error">
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {form.id ? "Chỉnh sửa vật tư" : "Thêm vật tư"}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Tên vật tư"
            fullWidth
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="code"
            label="Mã vật tư"
            fullWidth
            value={form.code}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="quantity"
            label="Số lượng"
            fullWidth
            type="number"
            value={form.quantity}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="importDate"
            label="Thời gian nhập"
            fullWidth
            type="date"
            value={form.importDate}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="exportDate"
            label="Thời gian xuất"
            fullWidth
            type="date"
            value={form.exportDate}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleSubmit} color="primary">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default InventoryManagementView;
