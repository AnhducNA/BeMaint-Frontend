import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function DashboardView() {
  return (
    <Container style={{ marginTop: 0 }}>
      <Grid container spacing={2}>
        {/* Device Status */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Trạng thái thiết bị</Typography>
              <PieChart
                series={[
                  {
                    data: [
                      { value: 5, label: "Đo nhiệt" },
                      { value: 10, label: "Áp suất" },
                      { value: 15, label: "Nhiệt độ" },
                      { value: 20, label: "Độ ẩm" },
                    ],
                    innerRadius: 80,
                  },
                ]}
                width={400}
                height={200}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Map Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Tổng quan</Typography>
              <Grid container spacing={3} style={{ marginTop: 0 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper style={{ padding: 16, textAlign: "center" }}>
                    Số lượng phân xưởng: 5
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper style={{ padding: 16, textAlign: "center" }}>
                    Thiết bị giám sát: 20
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper style={{ padding: 16, textAlign: "center" }}>
                    Máy đang chạy: 10
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper style={{ padding: 16, textAlign: "center" }}>
                    Máy bảo trì: 2
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Alarm Situation */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Alarm Situation for this Month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Energy Statistics */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Energy Statistics Today</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Energy Consumption Trend */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Today&apos;s Energy Consumption Trend
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Carbon Emissions */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Carbon Emissions Today</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="body1">
        Chọn một chức năng từ menu để bắt đầu.
      </Typography>

      <Typography variant="h6" style={{ marginTop: 20 }}>
        Thông báo:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Nhắc lịch bảo trì: Máy A cần bảo trì vào ngày 10/02/2025" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Cảnh báo: Nhiệt độ máy B vượt ngưỡng an toàn!" />
        </ListItem>
      </List>
    </Container>
  );
}
