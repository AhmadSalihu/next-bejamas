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
      <NextLink href={`/product/${product.slug}`} passHref>
      <Link>
      <CardMedia className={classes.cardMedia}
            component="img"
            image={product.image}
            title={product.name}
            >
            </CardMedia>
            </Link>
            </NextLink>
          <CardContent className={classes.cardContent}>
          <Typography>{product.name}</Typography>
          <Typography>${product.price}</Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
      <div className={classes.addTocart}>
      <Button
        className={classes.addToCartButton}
        fullWidth
        size="small"
        variant="contained"
        color="primary"
        onClick={() => addToCartHandler(product)}>
      Add to cart
    </Button>
      </div>
      </CardActions>
    </Card>
  );
}

