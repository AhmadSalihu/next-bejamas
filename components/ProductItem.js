import {
  Button,
  Link,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';

import useStyles from '../utils/styles';

export default function ProductItem({ product, addToCartHandler }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardArea}
      variant="raised"
      style={{ backgroundColor: 'transparent' }}
      >
      <CardMedia className={classes.cardMedia}
            component="img"
            image={product.image}
            title={product.name}
          >
          </CardMedia>
          <CardContent className={classes.cardContent}>
          <NextLink href={`/product/${product.slug}`} passHref>
          <Link>
          <Typography>{product.name}</Typography>
          </Link>
          </NextLink>
          <Typography>${product.price}</Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
      </CardActions>
      <div className={classes.addTocart}>
      <Button
      className={classes.addToCartButton}
      fullWidth
      size="large"
      variant="contained"
      color="primary"
      onClick={() => addToCartHandler(product)}>
      Add to cart
    </Button>
      </div>
    </Card>
  );
}

