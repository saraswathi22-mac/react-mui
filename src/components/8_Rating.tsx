import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <>
      <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} size="large" />
      </Stack>
      <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} precision={0.5} />
      </Stack>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          icon={<Favorite fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
        />
      </Stack>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          icon={<Favorite fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
          readOnly
        />
      </Stack>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          icon={<Favorite fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
          highlightSelectedOnly
        />
      </Stack>
    </>
  );
};
