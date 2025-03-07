import { FC } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router";
import { Typography } from "@components/Typography";
import * as S from "./EpisodeItem.styled";
import { EpisodeItemProps } from "./EpisodeItem.d";

export const EpisodeItem: FC<EpisodeItemProps> = ({
  thumbnailUrl,
  title,
  season,
  episode,
  description,
  airDate,
  linkTo,
  fullWidth,
}) => {
  return (
    <S.Wrapper $fullWidth={fullWidth}>
      <S.Thumbnail loading="lazy" src={thumbnailUrl} $fullWidth={fullWidth} />
      <Box
        p={{ xs: 2, sm: 3 }}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
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
          {title}
        </Typography>
        <Typography
          order={-1}
          variant={{ xs: "h5", lg: "h4" }}
          mb={1.5}
          fontWeight={800}
        >
          S{season} • E{episode}
        </Typography>
        <S.Content $fullWidth={fullWidth}>
          <Typography component="p" variant="body2" textAlign="justify">
            {description}
          </Typography>
          <Typography
            color="#767676"
            variant="overline"
            component="span"
            lineHeight={1}
          >
            {airDate}
          </Typography>
        </S.Content>
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          overflow="hidden"
          component={Link}
          to={linkTo}
        >
          <Box component="span" position="absolute" top="-999px" left={0}>
            More details
          </Box>
        </Box>
      </Box>
    </S.Wrapper>
  );
};
