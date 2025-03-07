import { Box } from "@mui/system";
import Skeleton from "react-loading-skeleton";

export const EpisodeSkeleton = () => {
  return (
    <Box paddingInline={{ xs: 3, xxl: 0 }}>
      <Box
        bgcolor="white"
        paddingTop={{ lg: 5 }}
        paddingBottom={{ lg: 3 }}
        boxShadow="0 2px 4px 0 rgba(0,0,0,0.08)"
      >
        <Box
          component={Skeleton}
          width="100%"
          sx={{ aspectRatio: "16/9" }}
          maxWidth={900}
          marginLeft="auto"
          marginRight="auto"
          display="block"
          mb={1}
        />
        <Box p={2}>
          <Box component={Skeleton} width={80} height={20} mb={1} />
          <Box
            component={Skeleton}
            width="100%"
            maxWidth={400}
            height={20}
            mb={3}
          />
          <Box component={Skeleton} width={50} height={15} />
        </Box>
      </Box>
    </Box>
  );
};
