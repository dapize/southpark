import { useParams } from "react-router";
import { Box } from "@mui/system";
import { getEpisode } from "@services/episodes";
import { useQuery } from "@tanstack/react-query";
import { EpisodeSkeleton } from "./Episode.skeleton";
import { Typography } from "@components/Typography";

export const Episode = () => {
  const params = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["episode", params.id],
    queryFn: () => getEpisode(params.id!),
  });

  if (isLoading) {
    return <EpisodeSkeleton />;
  }

  return (
    <Box paddingInline={{ xs: 3, xxl: 0 }}>
      <Box
        bgcolor="white"
        paddingTop={{ lg: 5 }}
        paddingBottom={{ lg: 3 }}
        boxShadow="0 2px 4px 0 rgba(0,0,0,0.08)"
      >
        <Box
          component="img"
          width="100%"
          sx={{ aspectRatio: "16/9" }}
          maxWidth={900}
          marginLeft="auto"
          marginRight="auto"
          display="block"
          src={data?.thumbnailUrl}
          mb={1}
        />
        <Box p={4} pb={{ lg: 0 }}>
          <Typography
            component="h3"
            variant="subtitle2"
            mb={1.2}
            fontWeight={700}
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            width="100%"
            flexShrink={0}
          >
            {data?.title}
          </Typography>
          <Typography
            order={-1}
            variant={{ xs: "h5", lg: "h4" }}
            mb={1.5}
            fontWeight={800}
          >
            S{data?.season} • E{data?.episode}
          </Typography>
          <Typography component="p" variant="body2" textAlign="justify" mb={2}>
            {data?.description}
          </Typography>
          <Box
            component="a"
            href={data?.wikiUrl}
            sx={{ typography: "body2", wordBreak: "break-word" }}
            target="_blank"
            color="#000"
            fontWeight={700}
            maxWidth="100%"
          >
            {data?.wikiUrl}
          </Box>
          <Typography
            color="#767676"
            variant="overline"
            lineHeight={1}
            display="block"
            mt={4}
          >
            {data?.airDate}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
