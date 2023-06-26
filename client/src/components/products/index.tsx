import React from 'react';
import { Button, Card, Container, Grid, Image, Rating } from 'semantic-ui-react';

const products = [
  {
    id: 1,
    name: 'Iphone 11 Promax',
    image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/268712/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.jpg'
  },
  {
    id: 2,
    name: 'Iphone 12 Promax',
    image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/268712/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.jpg'
  },
  {
    id: 3,
    name: 'Iphone 13 Promax',
    image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/268712/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.jpg'
  },
  {
    id: 4,
    name: 'Iphone 14 Promax',
    image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/268712/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.jpg'
  },
  {
    id: 5,
    name: 'Iphone 15 Promax',
    image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/268712/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.jpg'
  },
  {
    id: 6,
    name: 'Iphone 15 Promax',
    image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/268712/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.jpg'
  },
  {
    id: 7,
    name: 'Iphone 15 Promax',
    image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/268712/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.jpg'
  },
  {
    id: 8,
    name: 'Iphone 15 Promax',
    image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/268712/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.jpg'
  },
  {
    id: 9,
    name: 'Iphone 15 Promax',
    image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/268712/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.jpg'
  },
  {
    id: 10,
    name: 'Iphone 15 Promax',
    image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/268712/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.jpg'
  }
]

export const Products = () => {

  return (
    <Container>
      <Grid>
        <Grid.Row columns={5}>
          {products.map((x, idx) => (
            <Grid.Column key={idx}>
              <Card>
                <Card.Content>
                  <Image
                    label={{
                      as: 'a',
                      color: 'red',
                      content: 'Giảm 25%',
                      ribbon: true,
                      size: 'tiny'
                    }}
                    src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/268712/dell-xps-17-9710-i7-xps7i7001w1-1-600x600.jpg'
                  />
                  <Card.Header>{x.name}</Card.Header>
                  {/* <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                  </Card.Description> */}
                </Card.Content>
                <Card.Content>
                  <Button basic size='mini'>
                    12 GB
                  </Button>
                  <Button basic color='blue' size='mini'>
                    64 GB
                  </Button>
                  <Button basic size='mini'>
                    128 GB
                  </Button>
                  <br />
                  <Rating icon='star' defaultRating={3} maxRating={4} />
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
      </Grid.Row>
      </Grid>
    </Container>
  );
};
