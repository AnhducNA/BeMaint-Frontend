import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  LinearProgress,
  Alert,
} from "@mui/material";
import {
  Factory,
  DevicesOther,
  Warning,
  Build,
  CheckCircle,
  Cancel,
  Edit,
  Delete,
  Notifications,
} from "@mui/icons-material";

const DashboardUserView = () => {
  // Mock data - trong thực tế sẽ lấy từ API
  const workshops = [
    { id: 1, name: "Phân xưởng A", devices: 5 },
    { id: 2, name: "Phân xưởng B", devices: 3 },
  ];

  const devices = [
    {
      id: 1,
      name: "Máy 1",
      workshop: "Phân xưởng A",
      status: "running",
      uptime: "24h",
      temperature: 45,
      humidity: 65,
    },
    {
      id: 2,
      name: "Máy 2",
      workshop: "Phân xưởng A",
      status: "maintenance",
      uptime: "12h",
      temperature: 40,
      humidity: 60,
    },
  ];

  const maintenance = [
    {
      id: 1,
      device: "Máy 1",
      date: "2024-02-15",
      type: "Bảo trì định kỳ",
      priority: "high",
    },
    {
      id: 2,
      device: "Máy 2",
      date: "2024-02-20",
      type: "Kiểm tra thiết bị",
      priority: "medium",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "running":
        return "success";
      case "off":
        return "error";
      case "maintenance":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {/* Thống kê tổng quan */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Factory color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">
                  Phân xưởng: {workshops.length}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <DevicesOther color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Thiết bị: {devices.length}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <CheckCircle color="success" sx={{ mr: 1 }} />
                <Typography variant="h6">
                  Đang hoạt động:{" "}
                  {devices.filter((d) => d.status === "running").length}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Build color="warning" sx={{ mr: 1 }} />
                <Typography variant="h6">
                  Đang bảo trì:{" "}
                  {devices.filter((d) => d.status === "maintenance").length}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Danh sách phân xưởng */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Danh sách phân xưởng
              </Typography>
              <List>
                {workshops.map((workshop) => (
                  <ListItem key={workshop.id}>
                    <ListItemText
                      primary={workshop.name}
                      secondary={`Số thiết bị: ${workshop.devices}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="edit">
                        <Edit />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Thông báo bảo trì */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Lịch bảo trì
              </Typography>
              <List>
                {maintenance.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemText
                      primary={`${item.device} - ${item.type}`}
                      secondary={`Ngày: ${item.date}`}
                    />
                    <Chip
                      label={item.priority}
                      color={item.priority === "high" ? "error" : "warning"}
                      size="small"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Trạng thái thiết bị */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Trạng thái thiết bị
              </Typography>
              <Grid container spacing={2}>
                {devices.map((device) => (
                  <Grid item xs={12} md={6} key={device.id}>
                    <Box
                      border={1}
                      borderColor="grey.300"
                      borderRadius={1}
                      p={2}
                    >
                      <Typography variant="subtitle1">
                        {device.name} - {device.workshop}
                      </Typography>
                      <Chip
                        label={device.status}
                        color={getStatusColor(device.status)}
                        size="small"
                        sx={{ mb: 1 }}
                      />
                      <Typography variant="body2">
                        Thời gian hoạt động: {device.uptime}
                      </Typography>
                      <Box mt={1}>
                        <Typography variant="body2">
                          Nhiệt độ: {device.temperature}°C
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={(device.temperature / 100) * 100}
                          color={device.temperature > 50 ? "error" : "primary"}
                        />
                      </Box>
                      <Box mt={1}>
                        <Typography variant="body2">
                          Độ ẩm: {device.humidity}%
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={device.humidity}
                          color={device.humidity > 80 ? "error" : "primary"}
                        />
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Cảnh báo */}
        <Grid item xs={12}>
          <Alert severity="warning" icon={<Warning />}>
            Cảnh báo: Nhiệt độ Máy 1 vượt ngưỡng cho phép!
          </Alert>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardUserView;
