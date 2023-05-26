import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import Highlighter from './third-party/Highlighter';

const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};

const MainCard = ({
  border,
  boxShadow,
  contentSX,
  darkTitle,
  divider,
  elevation,
  secondary,
  // shadow,
  sx,
  title,
  codeHighlight,
  content,
  children
}) => {
  const theme = useTheme();
  boxShadow = theme.palette.mode === 'dark' ? boxShadow || true : boxShadow;
const shadow = theme.customShadows?.z1 || 'inherit';

  return (
    <Card
      elevation={elevation || 0}
      sx={{
        border: border ? '1px solid' : 'none',
        borderRadius: 2,
        borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800,
        boxShadow: boxShadow && (!border || theme.palette.mode === 'dark') ? shadow || theme.customShadows.z1 : 'inherit',
        ':hover': {
          boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'inherit'
        },
        ...sx
      }}
    >
      {!darkTitle && title && (
        <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} />
      )}
      {darkTitle && title && (
        <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />
      )}

      {content && <CardContent sx={contentSX}>{children}</CardContent>}
      {!content && children}

      {codeHighlight && (
        <>
          <Divider sx={{ borderStyle: 'dashed' }} />
          <Highlighter codeHighlight={codeHighlight} main>
            {children}
          </Highlighter>
        </>
      )}
    </Card>
  );
};

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  divider: PropTypes.bool,
  elevation: PropTypes.number,
  secondary: PropTypes.node,
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  codeHighlight: PropTypes.bool,
  content: PropTypes.bool,
  children: PropTypes.node
};

export default MainCard;