import { NavigateNext } from "@mui/icons-material";
import { Box, Link, Typography, Breadcrumbs } from "@mui/material";

export const MuiBreadcrumbs = () => {
  return (
    <>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcrumb" separator="-">
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNext fontSize="small" />}
        >
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNext fontSize="small" />}
          maxItems={2}
        >
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNext fontSize="small" />}
          maxItems={3}
          // itemsAfterCollapse={2}
          itemsBeforeCollapse={2}
        >
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
    </>
  );
};
