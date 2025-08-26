import React from "react";
import { FiTarget } from "react-icons/fi";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const BudgetSettings = () => {
  return (
    <div className="w-full ">
      <div className="flex gap-x-3 items-center">
        <FiTarget size={25} />
        <h1 className="text-[20px] font-medium">Budget Settings</h1>
      </div>

      <div className="mx-14 mt-2 space-y-8">
        {/* Budget Basics */}
        <div>
          <h1 className="text-[18px] font-medium">Budget Basics</h1>
          <div className="grid grid-cols-2 gap-x-7 mt-3 space-y-3">
            {/* Preferred Currency */}
            <div>
              <label className="font-medium pb-1 text-[15px]">
                Preferred Currency
              </label>
              <TextField
                select
                SelectProps={{ native: true }}
                fullWidth
                variant="outlined"
                size="small"
                className="rounded-md border-[#e6e6e6]"
                InputProps={{
                  style: {
                    height: "43px",
                    fontSize: "14px",
                  },
                }}
              >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
              </TextField>
            </div>

            {/* Budget Period */}
            <div>
              <label className="font-medium pb-1 text-[15px]">
                Budget Period
              </label>
              <TextField
                select
                SelectProps={{ native: true }}
                fullWidth
                variant="outlined"
                size="small"
                className="rounded-md border-[#e6e6e6]"
                InputProps={{
                  style: {
                    height: "43px",
                    fontSize: "14px",
                  },
                }}
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </TextField>
            </div>

            {/* Budget Start Date */}
            <div>
              <label className="font-medium pb-1 text-[15px]">
                Budget Start Date
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      size="small"
                      className="rounded-md border-[#e6e6e6]"
                      InputProps={{
                        ...params.InputProps,
                        style: {
                          height: "43px",
                          fontSize: "14px",
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        {/* Spending Controls */}
        <div className="w-full">
          <h1 className="text-[18px] font-medium">Spending Controls</h1>
          <div className="flex flex-col mt-3 w-full">
            <label className="font-medium pb-1 text-[15px]">
              Overall Spending Limit
            </label>
            <TextField
              type="number"
              size="small"
              variant="outlined"
              className="rounded-md border-[#e6e6e6]"
              style={{ width: "50%" }}
              InputProps={{
                style: {
                  height: "43px",
                  fontSize: "14px",
                },
              }}
            />
          </div>
        </div>

        {/* Alerts and Notifications */}
        <div>
          <h1 className="text-[18px] font-medium">Alerts and Notifications</h1>
          <div className="grid grid-cols-2 gap-x-7 mt-3 space-x-3">
            {/* Alert Thresholds */}
            <div className="flex items-center space-x-5">
              <label className="font-medium pb-1 text-[15px] text-nowrap">
                Alert Thresholds:
              </label>
              <Box display="flex">
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="50%"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="75%"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="90%"
                />
              </Box>
            </div>

            {/* Over-Spending Alerts */}
            <div className="flex items-center space-x-3">
              <label className="font-medium pb-1 text-[15px]">
                Over-Spending Alerts:
              </label>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetSettings;
