import { faker } from '@faker-js/faker';

const List1 = [
  {
    id: 0,
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
    position: faker.name.jobTitle(),
    Author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.name.lastName()
  },
  {
    id: 1,
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
    position: faker.name.jobTitle(),
    Author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.name.lastName()
  },
  {
    id: 2,
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
    position: faker.name.jobTitle(),
    Author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.name.lastName()
  }
];

export default List1;
