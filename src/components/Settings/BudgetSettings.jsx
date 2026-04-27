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

const BudgetSettings = () => {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex gap-x-3 items-center">
        <FiTarget size={22} className="text-green-600 flex-shrink-0" />
        <h1 className="text-[20px] md:text-[22px] font-semibold">
          Budget Settings
        </h1>
      </div>

      <div className="mt-6 space-y-8">
        {/* Budget Basics */}
        <div>
          <h2 className="text-base md:text-[17px] font-semibold text-gray-800 mb-3">
            Budget Basics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Preferred Currency */}
            <div>
              <label className="block font-medium text-[14px] text-gray-700 mb-1">
                Preferred Currency
              </label>
              <TextField
                select
                SelectProps={{ native: true }}
                fullWidth
                variant="outlined"
                size="small"
                InputProps={{ style: { height: "43px", fontSize: "14px" } }}
              >
                <option value="NGN">NGN — Nigerian Naira</option>
                <option value="USD">USD — US Dollar</option>
                <option value="GBP">GBP — British Pound</option>
              </TextField>
            </div>

            {/* Budget Period */}
            <div>
              <label className="block font-medium text-[14px] text-gray-700 mb-1">
                Budget Period
              </label>
              <TextField
                select
                SelectProps={{ native: true }}
                fullWidth
                variant="outlined"
                size="small"
                InputProps={{ style: { height: "43px", fontSize: "14px" } }}
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </TextField>
            </div>

            {/* Budget Start Date */}
            <div className="flex flex-col">
              <label className="block font-medium text-[14px] text-gray-700 mb-1">
                Budget Start Date
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      size: "small",
                      inputProps: { style: { height: "43px", fontSize: "14px" } },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        {/* Spending Controls */}
        <div>
          <h2 className="text-base md:text-[17px] font-semibold text-gray-800 mb-3">
            Spending Controls
          </h2>
          <div>
            <label className="block font-medium text-[14px] text-gray-700 mb-1">
              Overall Spending Limit
            </label>
            <TextField
              type="number"
              size="small"
              variant="outlined"
              placeholder="e.g. 50000"
              className="w-full sm:w-1/2"
              InputProps={{ style: { height: "43px", fontSize: "14px" } }}
            />
          </div>
        </div>

        {/* Alerts and Notifications */}
        <div>
          <h2 className="text-base md:text-[17px] font-semibold text-gray-800 mb-3">
            Alerts and Notifications
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {/* Alert Thresholds */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <label className="font-medium text-[14px] text-gray-700 whitespace-nowrap">
                Alert Thresholds:
              </label>
              <Box display="flex" flexWrap="wrap">
                <FormControlLabel control={<Checkbox size="small" />} label="50%" />
                <FormControlLabel control={<Checkbox size="small" />} label="75%" />
                <FormControlLabel control={<Checkbox size="small" />} label="90%" />
              </Box>
            </div>

            {/* Over-Spending Alerts */}
            <div className="flex items-center gap-x-2">
              <label className="font-medium text-[14px] text-gray-700 whitespace-nowrap">
                Over-Spending Alerts:
              </label>
              <Switch size="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetSettings;
